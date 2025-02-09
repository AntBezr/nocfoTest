import { useThemeColor } from '@components/Themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfile from '@screens/ProfileStack/EditProfile';
import ProfileScreen from '@screens/ProfileStack/ProfileScreen';
import { ProfileStackParamList } from 'types/navigation';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: useThemeColor({}, 'background') },
        headerTintColor: useThemeColor({}, 'text'),
      }}
    >
      <Stack.Screen
        name="ProfileView"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
      <Stack.Screen
        name="EditProfileView"
        component={EditProfile}
        options={{ title: 'Edit profile' }}
      />
    </Stack.Navigator>
  );
}
