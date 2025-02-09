import { Text, View } from '@components/Themed';
import Colors from '@constants/Colors';
import React from 'react';
import { Switch } from 'react-native';
import { SwitchProps } from 'types/uiElements';

const SwitchComponent: React.FC<SwitchProps> = ({
  label,
  value,
  onValueChange,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >
        {label}
      </Text>
      <Switch
        trackColor={{
          false: '#3e3e3e',
          true: Colors.light.tint,
        }}
        thumbColor="white"
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};

export default SwitchComponent;
