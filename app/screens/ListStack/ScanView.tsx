import UploadIcon from "@assets/icons/addPhoto.svg";
import { Text, ThemedScrollView, View } from "@components/Themed";
import Button from "@components/ui/ButtonSecondary";
import ImagePickerModal from "@components/ui/ImagePickerModal";
import LabeledInput from "@components/ui/LabledInput";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import  {useImagePicker}  from "hooks/useImagePicker";
import  {usePlantsActions}  from "hooks/usePlantActions";
import { ListStackParamList } from "types/navigation";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type ScanViewNavigationProp = NativeStackNavigationProp<
  ListStackParamList,
  "ScanView"
>;
const defaultImage = Image.resolveAssetSource(
  require("@assets/images/placeholder.png"),
).uri;

const ScanView: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [image, setImage] = useState<string>(defaultImage);
  const [description, setDescription] = useState<string>("");
  const navigation = useNavigation<ScanViewNavigationProp>();
  const { addPlant } = usePlantsActions();
  const { pickImage, takePhoto } = useImagePicker();
  const [error, setError] = useState<string | null>(null);

  const onPressSave = () => {
    error && setError(null);
    if (!name) {
      setError("Name is required");
      return;
    }
    if (!description) {
      setError("Description is required");
      return;
    }

    const newPlant: {
      image: string;
      name: string;
      description: string;
    } = {
      image: image || defaultImage,
      name,
      description,
    };
    addPlant(newPlant);
    navigation.goBack();
  };

  const onChooseImagePress = async () => {
    const pickedUri = await pickImage();
    if (pickedUri) {
      setImage(pickedUri);
    }
    setModalVisible(false);
  };

  const onPhotoTakePress = async () => {
    const photoUri = await takePhoto();
    if (photoUri) {
      setImage(photoUri);
    }
    setModalVisible(false);
  };

  const onNameChange = (text: string) => {
    error && setError(null);
    setName(text);
  };

  const onDescriptionChange = (text: string) => {
    error && setError(null);
    setDescription(text);
  };

  return (
    <View style={{ flex: 1 }}>
      <ThemedScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <KeyboardAwareScrollView>
          <ImagePickerModal
            visible={modalVisible}
            onClose={() => {
              setModalVisible(false);
            }}
            onPhotoTakePress={onPhotoTakePress}
            onChooseImagePress={onChooseImagePress}
          />
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
            activeOpacity={0.7}
          >
            <View
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                width: 250,
                alignSelf: "center",
              }}
            >
              <Image
                source={{ uri: image }}
                style={{
                  width: 250,
                  height: 250,
                  borderRadius: 20,
                  marginBottom: 20,
                  alignSelf: "center",
                }}
              />

              <View
                style={{
                  position: "absolute",
                  width: 250,
                  height: 250,
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  borderRadius: 20,
                }}
              />
            </View>
            <UploadIcon
              width={150}
              height={150}
              style={{
                position: "absolute",
                justifyContent: "center",
                alignSelf: "center",
                zIndex: 1,
                marginTop: 50,
              }}
              color="rgba(255, 255, 255, 0.7)"
            />
          </TouchableOpacity>

          <View>
            <LabeledInput
              label="Name"
              value={name}
              onChangeText={onNameChange}
              multiline={false}
              numberOfLines={1}
              style={{
                maxHeight: 30,
              }}
            />
            <LabeledInput
              label="Description"
              value={description}
              onChangeText={onDescriptionChange}
              multiline
              numberOfLines={3}
              style={{ maxHeight: 80 }}
            />
          </View>
        </KeyboardAwareScrollView>
      </ThemedScrollView>
      {error && (
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      )}
      <Button
        title="Save"
        onPress={() => {
          onPressSave();
        }}
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

export default ScanView;
