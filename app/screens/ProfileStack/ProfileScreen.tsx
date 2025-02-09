import SettingsIcon from '@assets/icons/settings.svg';
import { Text, View } from '@components/Themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import { useAppSelector } from 'hooks/useAppSelector';
import { Image, TouchableOpacity } from 'react-native';
import { ProfileStackParamList } from 'types/navigation';

type PrfileViewNavigationProp = NativeStackNavigationProp<
  ProfileStackParamList,
  'ProfileView'
>;

export default function ProfileScreen() {
  const user = useAppSelector((state) => state.user);
  const navigation = useNavigation<PrfileViewNavigationProp>();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EditProfileView');
        }}
        style={{ position: 'absolute', top: 16, right: 16 }}
      >
        <SettingsIcon color="#757575" width={36} height={36} />
      </TouchableOpacity>
      <Image
        source={{ uri: user.image }}
        style={{
          width: 140,
          height: 140,
          borderRadius: 120,
          resizeMode: 'cover',
          marginBottom: 16,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          marginBottom: 8,
        }}
      >
        {user.name}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontStyle: 'italic',
          marginBottom: 16,
          textAlign: 'center',
        }}
      >
        {user.bio}
      </Text>
      <Text style={{ fontSize: 16 }}>{user.email}</Text>
    </View>
  );
}
