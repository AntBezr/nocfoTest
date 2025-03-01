import { Text, View } from '@components/Themed';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ListStackParamList } from 'types/navigation';

import { Plant } from '../../types/store.d';

type NavigationProp = NativeStackNavigationProp<ListStackParamList, 'List'>;

const ListItem = ({ item }: { item: Plant }) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={{ borderRadius: 30, marginVertical: 5 }}>
      <TouchableOpacity
        style={{
          padding: 6,
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}
        onPress={() => {
          navigation.navigate('DetailView', { plant: item });
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingRight: 10,
            flex: 1,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>
            {item.name}
          </Text>
          <Text style={{ marginBottom: 5 }} numberOfLines={2}>
            {item.description}
          </Text>
          <Text style={{ color: '#666', fontSize: 12 }}>
            Added on: {item.dateAdded}
          </Text>
        </View>

        <View>
          <Image
            source={{ uri: item.image }}
            style={{ width: 100, height: 100, borderRadius: 30 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
