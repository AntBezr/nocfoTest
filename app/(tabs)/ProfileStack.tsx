import { StyleSheet } from "react-native";

import { Text, View } from "@components/Themed";
import UserImage from "@components/ui/UserImage";

import userData from "../data/userData.json";

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <UserImage image={userData.image} />
      <Text style={styles.title}>{userData.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
