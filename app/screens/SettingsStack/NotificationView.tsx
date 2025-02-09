import { ThemedScrollView, View } from '@components/Themed';
import Button from '@components/ui/ButtonSecondary';
import SwitchComponent from '@components/ui/Switch';
import { useAppSelector } from '@hooks/useAppSelector';
import { useUserActions } from '@hooks/useUserActions';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';

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
  const navigation = useNavigation();
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
    <View style={{ flex: 1 }}>
      <ThemedScrollView style={{ flex: 1, alignItems: 'center', padding: 16 }}>
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
          width: '90%',
        }}
      />
    </View>
  );
};

export default NotificationView;
