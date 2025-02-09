import { Text, View } from "@components/Themed";
import UserImage from "@components/ui/UserImage";
import { useAppSelector } from "hooks/useAppSelector";

export default function ProfileScreen() {
  const user = useAppSelector((state) => state.user);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <UserImage image={user.image} />
      <Text>{user.name}</Text>
      <Text>{user.bio}</Text>
      <Text>{user.email}</Text>
    </View>
  );
}
