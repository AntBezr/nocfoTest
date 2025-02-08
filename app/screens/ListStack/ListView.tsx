import React, { useState } from "react";
import { FlatList } from "react-native";

import { ListStackParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ThemedTextInput, View } from "@components/Themed";
import { useAppSelector } from "app/hooks/useAppSelector";
import Button from "@components/ui/ButtonSecondary";
import ListItem from "@components/ui/ListItem";
import { Plant } from "app/types/store";

type Props = NativeStackScreenProps<ListStackParamList, "List">;

const ListView: React.FC<Props> = ({ navigation }) => {
  const plants = useAppSelector((state) => state.plants);
  const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(plants);

  const onSearch = (text: string) => {
    setSearch(text);
    setFilteredPlants(
      plants.filter((plant: Plant) =>
        plant.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ThemedTextInput
        value={search}
        type="search"
        onChangeText={onSearch}
        placeholder="Search"
        style={[
          {
            margin: 16,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 5,
            shadowRadius: 3.84,
            elevation: 5,
          },
        ]}
      />
      <View
        style={{ flex: 1, padding: 10, paddingTop: 0, alignItems: "center" }}
      >
        <FlatList // Display a list of plants
          data={filteredPlants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem item={item} />} // Render each plant item using the ListItem component
          contentContainerStyle={{ paddingBottom: 50 }} // Add padding to the bottom of the list
        />
      </View>
      <Button
        title="Add Plant"
        onPress={() => navigation.navigate("ScanView")}
        style={{
          position: "absolute",
          alignSelf: "center",
          bottom: 10,
          width: "90%",
        }}
      />
    </View>
  );
};

export default ListView;
