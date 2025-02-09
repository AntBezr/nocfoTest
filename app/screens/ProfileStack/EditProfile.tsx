import UploadIcon from '@assets/icons/addPhoto.svg';
import { ThemedScrollView, View } from '@components/Themed';
import Button from '@components/ui/ButtonSecondary';
import LabeledInput from '@components/ui/LabledInput';
import { useAppSelector } from '@hooks/useAppSelector';
import { useImagePicker } from '@hooks/useImagePicker';
import { useUserActions } from '@hooks/useUserActions';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
  const [userImage, setUserImage] = useState(userData.image);

  const navigation = useNavigation<EditProfileNavigationProp>();
  const { editUser } = useUserActions();
  const { pickImage } = useImagePicker();

  const onPressSave = () => {
    editUser({
      ...userData,
      name: userName,
      email: userEmail,
      bio: userBio,
      image: userImage,
    });
    navigation.goBack();
  };

  const onChooseImagePress = async () => {
    // Choose image from gallery
    const pickedUri = await pickImage();
    if (pickedUri) {
      setUserImage(pickedUri);
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <ThemedScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <TouchableOpacity
            onPress={onChooseImagePress}
            style={{ alignItems: 'center' }}
          >
            <UploadIcon
              width={70}
              height={70}
              style={{
                position: 'absolute',
                justifyContent: 'center',
                alignSelf: 'center',
                zIndex: 1,
                marginTop: 35,
              }}
              color="rgba(255, 255, 255, 0.7)"
            />
            <Image
              source={{ uri: userImage }}
              style={{
                width: 140,
                height: 140,
                borderRadius: 120,
                resizeMode: 'cover',
                marginBottom: 16,
              }}
            />
          </TouchableOpacity>
          <View style={{ width: '100%' }}>
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
          </View>
        </ThemedScrollView>
      </KeyboardAwareScrollView>
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
