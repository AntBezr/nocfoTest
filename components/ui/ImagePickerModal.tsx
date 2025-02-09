import { Text, ThemedModal, View } from '@components/Themed';
import React from 'react';

import Button from './ButtonSecondary';
interface ImagePickerModalProps {
  visible: boolean;
  onClose: () => void;
  onPhotoTakePress: () => void;
  onChooseImagePress: () => void;
}

const ImagePickerModal: React.FC<ImagePickerModalProps> = ({
  visible,
  onClose,
  onPhotoTakePress,
  onChooseImagePress,
}) => {
  return (
    <ThemedModal
      transparent
      visible={visible}
      onClose={onClose}
      animationType="fade"
    >
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 15 }}>
        Change picture
      </Text>
      <View style={{ flexDirection: 'column', width: '100%', height: 100 }}>
        <Button
          onPress={onPhotoTakePress}
          title="Take a photo"
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
          }}
        />
        <Button
          onPress={onChooseImagePress}
          title="Choose from gallery"
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
          }}
        />
      </View>
    </ThemedModal>
  );
};

export default ImagePickerModal;
