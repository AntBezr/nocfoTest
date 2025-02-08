import { Text, View } from "@components/Themed";
import UserImage from "@components/ui/UserImage";
import { useAppSelector } from "app/hooks/useAppSelector";
import { StyleSheet } from "react-native";

export default function ProfileScreen() {
  const user = useAppSelector((state) => state.user);
  return (
    <View style={styles.container}>
      <UserImage image={user.image} />
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.title}>{user.bio}</Text>
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
