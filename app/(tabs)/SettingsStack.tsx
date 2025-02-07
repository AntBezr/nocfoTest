import { StyleSheet } from "react-native";
import { Text, View } from "@components/Themed";
import SettingsIcon from "@assets/icons/settings.svg";
import Button from "@components/ui/ButtonSecondary";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <SettingsIcon width={150} height={150} color={"#757575"} />
        <Text style={{ fontSize: 28, marginBottom: 20 }}>Settings</Text>
      </View>
      <View>
        <Button title="Notifications" />
        <Button title="Change password" />
        <Button title="Recomendations" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
