import React from "react";
import { FlatList } from "react-native";

import { ListStackParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "@components/Themed";
import { useAppSelector } from "app/hooks/useAppSelector";
import Button from "@components/ui/ButtonSecondary";
import ListItem from "@components/ui/ListItem";
import SearchInput from "@components/ui/SearchInput";

type Props = NativeStackScreenProps<ListStackParamList, "List">;

const ListView: React.FC<Props> = ({ navigation }) => {
  const plants = useAppSelector((state) => state.plants);
  return (
    <View style={{ flex: 1 }}>
      <SearchInput style />
      <View
        style={{ flex: 1, padding: 10, paddingTop: 0, alignItems: "center" }}
      >
        <FlatList // Display a list of plants
          data={plants}
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
