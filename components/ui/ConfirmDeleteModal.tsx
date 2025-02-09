import { Text, ThemedModal, View } from '@components/Themed';
import React from 'react';

import Button from './ButtonSecondary';

interface ConfirmDeleteModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  onPressYes: () => void;
  onPressNo: () => void;
  title: string;
  question: string;
  buttonYesText: string;
  buttonNoText: string;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  modalVisible,
  setModalVisible,
  onPressYes,
  onPressNo,
  title,
  question,
  buttonYesText,
  buttonNoText,
}) => {
  return (
    <ThemedModal transparent visible={modalVisible} animationType="fade">
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 15 }}>
        {title}
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>{question}</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Button
          style={{
            flex: 1,
            marginHorizontal: 10,
            backgroundColor: 'red',
          }}
          title={buttonYesText}
          onPress={onPressYes}
        />
        <Button
          style={{ flex: 1, marginHorizontal: 10 }}
          title={buttonNoText}
          onPress={onPressNo}
        />
      </View>
    </ThemedModal>
  );
};

export default ConfirmDeleteModal;
