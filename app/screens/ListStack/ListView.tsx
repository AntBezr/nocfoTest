import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const sortedPlants = [...plants].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredPlants(sortedPlants);
  }, [plants]);

  useEffect(() => {
    if (search) {
      setFilteredPlants(
        filteredPlants.filter((plant) =>
          plant.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredPlants(plants);
    }
  }, [search, plants]);

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
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
        ]}
      />
      <View
        style={{ flex: 1, padding: 10, paddingTop: 0, alignItems: "center" }}
      >
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem item={item} />}
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
