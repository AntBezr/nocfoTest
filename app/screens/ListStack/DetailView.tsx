import { Text, ThemedScrollView, View } from '@components/Themed';
import Button from '@components/ui/ButtonSecondary';
import ConfirmDeleteModal from '@components/ui/ConfirmDeleteModal';
import { useAppSelector } from '@hooks/useAppSelector';
import { usePlantsActions } from '@hooks/usePlantActions';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { ListStackParamList } from 'types/navigation';

type DetailViewNavigationProp = NativeStackNavigationProp<
  ListStackParamList,
  'DetailView'
>;
type Props = NativeStackScreenProps<ListStackParamList, 'DetailView'>;

const DetailView: React.FC<Props> = ({ route }) => {
  const plantId = route.params.plant?.id;
  const plant = useAppSelector((state) =>
    state.plants.find((p) => p.id === plantId),
  );
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { removePlant } = usePlantsActions();
  const navigation = useNavigation<DetailViewNavigationProp>();

  if (!plant) {
    return <Text>Plant not found!</Text>;
  }

  const onPressEdit = () => {
    navigation.navigate('EditView', { plant });
  };
  const onPressDelete = () => {
    removePlant(plant.id);
    navigation.goBack();
    setModalVisible(false);
  };

  if (!plant) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <ThemedScrollView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 40,
        }}
      >
        <ConfirmDeleteModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          onPressYes={onPressDelete}
          onPressNo={() => {
            setModalVisible(false);
          }}
          title="Delete Plant"
          question="Are you sure you want to delete this plant?"
          buttonYesText="Yes"
          buttonNoText="No"
        />

        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Image
            source={{ uri: plant.image }}
            style={{
              width: 260,
              height: 260,
              borderRadius: 20,
              marginBottom: 15,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            }}
          />

          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 6,
            }}
          >
            {plant.name}
          </Text>

          <Text style={{ fontSize: 14, marginBottom: 8 }}>
            Created on: {plant.dateAdded}
          </Text>

          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              paddingHorizontal: 10,
              lineHeight: 22,
            }}
          >
            {plant.description}
          </Text>
        </View>
      </ThemedScrollView>

      <Button
        title="Delete"
        style={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 60,
          width: '90%',
          backgroundColor: 'red',
        }}
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <Button
        title="Edit"
        style={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 10,
          width: '90%',
        }}
        onPress={onPressEdit}
      />
    </View>
  );
};

export default DetailView;
