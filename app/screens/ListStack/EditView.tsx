import UploadIcon from '@assets/icons/addPhoto.svg';
import { Text, ThemedModal, ThemedScrollView, View } from '@components/Themed';
import Button from '@components/ui/ButtonSecondary';
import LabeledInput from '@components/ui/LabledInput';
import { useImagePicker } from '@hooks/useImagePicker';
import { usePlantsActions } from '@hooks/usePlantActions';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ListStackParamList } from 'types/navigation';
import { Plant } from 'types/store';

type Props = NativeStackScreenProps<ListStackParamList, 'EditView'>;
type DetailViewNavigationProp = NativeStackNavigationProp<
  ListStackParamList,
  'EditView'
>;

const EditView: React.FC<Props> = ({ route }) => {
  const { plant }: { plant: Plant } = route.params;

  const [name, setName] = useState<string>(plant.name);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [image, setImage] = useState<string>(plant.image);
  const [description, setDescription] = useState<string>(plant.description);
  const { editPlant } = usePlantsActions();
  const navigation = useNavigation<DetailViewNavigationProp>();
  const { pickImage, takePhoto } = useImagePicker();

  const onPressSave = () => {
    const newPlant: Plant = {
      ...plant,
      image,
      name,
      description,
    };
    editPlant(plant.id, newPlant);

    navigation.goBack();
  };

  const onChooseImagePress = async () => {
    const pickedUri = await pickImage();
    if (pickedUri) {
      setImage(pickedUri);
    }
    setModalVisible(false);
  };

  const onPhotoTakePress = async () => {
    const photoUri = await takePhoto();
    if (photoUri) {
      setImage(photoUri);
    }
    setModalVisible(false);
  };

  const modal = () => {
    return (
      <ThemedModal
        transparent
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
        animationType="fade"
      >
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 15 }}>
          Change picture
        </Text>
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            height: 100,
          }}
        >
          <Button
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
            }}
            onPress={onPhotoTakePress}
            title="Take a photo"
          />
          <Button
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
            }}
            onPress={onChooseImagePress}
            title="Chose from galery"
          />
        </View>
      </ThemedModal>
    );
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        <ThemedScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          {modal()}
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
            activeOpacity={0.7}
          >
            <View
              style={{
                position: 'relative',
                borderRadius: 20,
                overflow: 'hidden',
                width: 250,
                alignSelf: 'center',
              }}
            >
              <Image
                source={{ uri: image }}
                style={{
                  width: 250,
                  height: 250,
                  borderRadius: 20,
                  marginBottom: 20,
                  alignSelf: 'center',
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  width: 250,
                  height: 250,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 20,
                }}
              />
            </View>
            <UploadIcon
              width={150}
              height={150}
              style={{
                position: 'absolute',
                justifyContent: 'center',
                alignSelf: 'center',
                zIndex: 1,
                marginTop: 50,
              }}
              color="rgba(255, 255, 255, 0.7)"
            />
          </TouchableOpacity>

          <View>
            <LabeledInput
              label="Name"
              value={name}
              onChangeText={setName}
              multiline={false}
              numberOfLines={1}
            />
            <LabeledInput
              label="Description"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={3}
              style={{ maxHeight: 80 }}
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

export default EditView;
