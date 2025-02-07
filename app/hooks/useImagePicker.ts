import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const useImagePicker = () => {
  const requestPermissions = async (type: "camera" | "gallery") => {
    let permissionStatus;

    if (type === "camera") {
      permissionStatus = await ImagePicker.requestCameraPermissionsAsync();
    } else {
      permissionStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
    }

    if (permissionStatus.status !== "granted") {
      Alert.alert(
        "Error",
        `App needs access to your ${
          type === "camera" ? "camera" : "gallery"
        } to proceed.`,
        [
          {
            text: "Retry",
            onPress: () => requestPermissions(type),
          },
          {
            text: "Cancel",
            onPress: () => console.log(`${type} permission denied`),
            style: "cancel",
          },
        ]
      );
      return false;
    }

    return true;
  };

  const pickImage = async (): Promise<string | null> => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Error", "App need access to your gallery to pick image");
      return null;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      return result.assets[0].uri;
    }

    return null;
  };

  const takePhoto = async (): Promise<string | null> => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Error", "App need access to your camera to take photo");
      return null; // возвращаем null, если доступ не был предоставлен
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      return result.assets[0].uri; // возвращаем URI изображения
    }

    return null; // возвращаем null, если снимок не был сделан
  };
  return { pickImage, takePhoto };
};
