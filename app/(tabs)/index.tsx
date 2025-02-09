import { useThemeColor } from "@components/Themed";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailView from "@screens/ListStack/DetailView";
import EditView from "@screens/ListStack/EditView";
import ListView from "@screens/ListStack/ListView";
import ScanView from "@screens/ListStack/ScanView";
import { ListStackParamList } from "types/navigation";

const Stack = createNativeStackNavigator<ListStackParamList>();

export default function ListStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: useThemeColor({}, "background") },
        headerTintColor: useThemeColor({}, "text"),
      }}
    >
      <Stack.Screen
        name="List"
        component={ListView}
        options={{
          title: "Plants",
         }}
      />
      <Stack.Screen
        name="ScanView"
        component={ScanView}
        options={{ title: "Add new plant" }}
      />
      <Stack.Screen
        name="DetailView"
        component={DetailView}
        options={{ title: "Details" }}
      />
      <Stack.Screen
        name="EditView"
        component={EditView}
        options={{ title: "Edit" }}
      />
    </Stack.Navigator>
  );
}
