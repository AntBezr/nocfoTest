import SettingsIcon from '@assets/icons/settings.svg';
import { Text, View } from '@components/Themed';
import Button from '@components/ui/ButtonSecondary';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import React from 'react';
import { SettingsStackParamList } from 'types/navigation';

type SettingsViewNavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  'SettingsView'
>;

const SettingsView = () => {
  const navigation = useNavigation<SettingsViewNavigationProp>();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <View style={{ alignItems: 'center' }}>
        <SettingsIcon width={150} height={150} color="#757575" />
        <Text style={{ fontSize: 28, marginBottom: 20 }}>Settings</Text>
      </View>
      <View>
        <Button
          title="Notifications"
          onPress={() => {
            navigation.navigate('NotificationView');
          }}
        />
        <Button
          title="Change password"
          onPress={() => {
            navigation.navigate('ChangePasswordView');
          }}
        />
      </View>
    </View>
  );
};

export default SettingsView;
