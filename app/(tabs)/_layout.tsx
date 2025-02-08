import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListStack from ".";
import Colors from "@constants/Colors";
import { useColorScheme } from "app/hooks/useColorScheme";
import { useClientOnlyValue } from "app/hooks/useClientOnlyValue";
import TabBarIcon from "@components/TabBarIcon";
import { BottomTabParamList } from "../types/navigation";
import SettingsStack from "./SettingsStack";
import ProfileStack from "./ProfileStack";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const Tab = createBottomTabNavigator<BottomTabParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="index"
        component={ListStack}
        options={{
          headerShown: false,
          title: "List",
          tabBarIcon: ({ color }) => (
            <TabBarIcon tabName="list" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <TabBarIcon tabName="settings" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <TabBarIcon tabName="profile" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
