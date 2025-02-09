import { View } from '@components/Themed';
import Button from '@components/ui/ButtonSecondary';
import LabeledInput from '@components/ui/LabledInput';
import { useAppSelector } from '@hooks/useAppSelector';
import { useUserActions } from '@hooks/useUserActions';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { ProfileStackParamList } from 'types/navigation';

type EditProfileNavigationProp = NativeStackNavigationProp<
  ProfileStackParamList,
  'EditProfileView'
>;

const EditProfile = () => {
  const userData = useAppSelector((state) => state.user);
  const [userName, setUserName] = useState(userData.name);
  const [userEmail, setUserEmail] = useState(userData.email);
  const [userBio, setUserBio] = useState(userData.bio);

  const navigation = useNavigation<EditProfileNavigationProp>();
  const { editUser } = useUserActions();

  const onPressSave = () => {
    editUser({
      ...userData,
      name: userName,
      email: userEmail,
      bio: userBio,
    });
    // Save user data
    navigation.goBack();
  };

  return (
    <View style={{ padding: 16, flex: 1 }}>
      <LabeledInput
        label="Name"
        placeholder="Name"
        type="name"
        value={userName}
        onChangeText={setUserName}
      />
      <LabeledInput
        label="Email"
        placeholder="Email"
        type="emailAddress"
        value={userEmail}
        onChangeText={setUserEmail}
      />
      <LabeledInput
        label="Bio"
        placeholder="Bio"
        type="none"
        value={userBio}
        onChangeText={setUserBio}
        multiline
        numberOfLines={4}
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

export default EditProfile;
