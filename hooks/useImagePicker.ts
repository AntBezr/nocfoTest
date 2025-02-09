import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const useImagePicker = () => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const requestPermissions = async (
    type: "camera" | "gallery",
  ): Promise<boolean> => {
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
        `App needs access to your ${type === "camera" ? "camera" : "gallery"} to proceed.`,
        [
          {
            text: "Retry",
            onPress: () => requestPermissions(type),
          },
          {
            text: "Cancel",
            onPress: () => {
              console.log(`${type} permission denied`);
            },
            style: "cancel",
          },
        ],
      );
      return false;
    }

    return true;
  };
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const pickImage = async (): Promise<string | null> => {
    const hasPermission = await requestPermissions("gallery");
    if (!hasPermission) {
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
    const hasPermission = await requestPermissions("camera");
    if (!hasPermission) {
      return null;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      return result.assets[0].uri;
    }

    return null;
  };

  return { pickImage, takePhoto };
};

