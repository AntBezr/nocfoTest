import { Image } from "react-native";
import React, { useState } from "react";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { ListStackParamList } from "app/types/navigation";
import { Text, ThemedScrollView, View } from "@components/Themed";

import { useNavigation } from "expo-router";

import { useAppSelector } from "app/hooks/useAppSelector";
import { usePlantsActions } from "app/hooks/usePlantActions";
import Button from "@components/ui/ButtonSecondary";
import ConfirmDeleteModal from "@components/ui/ConfirmDeleteModal";

type DetailViewNavigationProp = NativeStackNavigationProp<
  ListStackParamList,
  "DetailView"
>;
type Props = NativeStackScreenProps<ListStackParamList, "DetailView">;

const DetailView: React.FC<Props> = ({ route }) => {
  const plantId = route.params.plant?.id;
  const plant = useAppSelector((state) =>
    state.plants.find((p) => p.id === plantId)
  );
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { removePlant } = usePlantsActions();
  const navigation = useNavigation<DetailViewNavigationProp>();

  if (!plant) {
    return <Text>Plant not found!</Text>;
  }

  const onPressEdit = () => {
    navigation.navigate("EditView", { plant });
  };
  const onPressDelete = async () => {
    await removePlant(plant.id);
    navigation.goBack();
    setModalVisible(false);
  };

  if (!plant) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <ThemedScrollView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <ConfirmDeleteModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          onPressYes={onPressDelete}
          onPressNo={() => setModalVisible(false)}
          title="Delete Plant"
          question="Are you sure you want to delete this plant?"
          buttonYesText="Yes"
          buttonNoText="No"
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Image
            source={{ uri: plant.image }}
            style={{
              width: 250,
              height: 250,
              borderRadius: 20,
              marginBottom: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
            }}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            {plant.name}
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 10 }}>
            Creation Date: {plant.dateAdded}
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginBottom: 20,
              paddingHorizontal: 20,
            }}
          >
            Description: {plant.description}
          </Text>
        </View>
      </ThemedScrollView>

      <Button
        title="Delete"
        style={{
          position: "absolute",
          alignSelf: "center",
          bottom: 60,
          width: "90%",
          backgroundColor: "red",
        }}
        onPress={() => setModalVisible(true)}
      />
      <Button
        title="Edit"
        style={{
          position: "absolute",
          alignSelf: "center",
          bottom: 10,
          width: "90%",
        }}
        onPress={onPressEdit}
      />
    </View>
  );
};

export default DetailView;
