import { ThemedScrollView, View } from '@components/Themed';
import Button from '@components/ui/ButtonSecondary';
import SwitchComponent from '@components/ui/Switch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useUserActions } from '@hooks/useUserActions';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { SettingsStackParamList } from 'types/navigation';

type NotificationViewNavigationProp = NativeStackNavigationProp<
  SettingsStackParamList,
  'NotificationView'
>;

const NotificationView = () => {
  const userSettings = useAppSelector((state) => state.user.notifications);

  const [waterPlant, setWaterPlant] = useState<boolean>(
    userSettings.waterPlant,
  );
  const [friendRequest, setFriendRequest] = useState<boolean>(
    userSettings.friendRequest,
  );
  const [plantBirthday, setPlantBirthday] = useState<boolean>(
    userSettings.plantBirthday,
  );
  const [plantCareTips, setPlantCareTips] = useState<boolean>(
    userSettings.plantCareTips,
  );
  const navigation = useNavigation<NotificationViewNavigationProp>();
  const { editNotifications } = useUserActions();

  const onPressSave = () => {
    editNotifications({
      waterPlant,
      friendRequest,
      plantBirthday,
      plantCareTips,
    });
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <ThemedScrollView style={{ flex: 1 }}>
        <SwitchComponent
          label="Water plant"
          value={waterPlant}
          onValueChange={setWaterPlant}
        />
        <SwitchComponent
          label="New friend requests"
          value={friendRequest}
          onValueChange={setFriendRequest}
        />
        <SwitchComponent
          label="Plant's birthday"
          value={plantBirthday}
          onValueChange={setPlantBirthday}
        />
        <SwitchComponent
          label="Plant care tips"
          value={plantCareTips}
          onValueChange={setPlantCareTips}
        />
      </ThemedScrollView>
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

export default NotificationView;
