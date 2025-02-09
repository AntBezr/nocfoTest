import { View } from '@components/Themed';
import Button from '@components/ui/ButtonSecondary';
import PasswordInput from '@components/ui/PasswordInput';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { SettingsStackParamList } from 'types/navigation';

type ChangePasswordViewNavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  'ChangePasswordView'
>;

const ChangePasswordView = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navagation = useNavigation<ChangePasswordViewNavigationProp>();

  const onPressSave = () => {
    setCurrentPassword('');
    setNewPassword('');

    navagation.goBack();
  };
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <PasswordInput
        label="Current password"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        placeholder="Enter current password"
        style={{ marginBottom: 20 }}
      />
      <PasswordInput
        placeholder="Enter new password"
        label="New password"
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <Button
        title="Save"
        onPress={() => {
          onPressSave();
        }}
        style={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 10,
          width: '100%',
        }}
      />
    </View>
  );
};

export default ChangePasswordView;
