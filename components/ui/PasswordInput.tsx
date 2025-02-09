import { Text, ThemedTextInput, View } from '@components/Themed';
import React from 'react';
import { PasswordInputProps } from 'types/uiElements';

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  style,
}) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5 }}>
        {label}
      </Text>
      <ThemedTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry
        placeholderTextColor={'rgba(130, 130, 130, 0.5)'}
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 8,
          fontSize: 16,
          minHeight: 30,
          ...style,
        }}
      />
    </View>
  );
};

export default PasswordInput;
