import { useThemeColor } from "@components/Themed";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChangePasswordView from "@screens/SettingsStack/ChangePasswordView";
import NotificationView from "@screens/SettingsStack/NotificationView";
import SettingsView from "@screens/SettingsStack/SettingsView";
import { SettingsStackParamList } from "types/navigation";

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export default function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: useThemeColor({}, "background") },
        headerTintColor: useThemeColor({}, "text"),
      }}
    >
      <Stack.Screen
        name="SettingsView"
        component={SettingsView}
        options={{ title: "Settings" }}
      />
      <Stack.Screen
        name="NotificationView"
        component={NotificationView}
        options={{ title: "Notifications" }}
      />
      <Stack.Screen
        name="ChangePasswordView"
        component={ChangePasswordView}
        options={{ title: "Add new plant" }}
      />
    </Stack.Navigator>
  );
}
