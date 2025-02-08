import { useThemeColor } from "@components/Themed";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfile from "@screens/ProfileStack/EditProfile";
import ProfileScreen from "@screens/ProfileStack/ProfileScreen";
import { ProfileStackParamList } from "app/types/navigation";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: useThemeColor({}, "background") },
        headerTintColor: useThemeColor({}, "text"),
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: "Add new plant" }}
      />
    </Stack.Navigator>
  );
}
