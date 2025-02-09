import { Text, ThemedTextInput, View } from '@components/Themed';
import React from 'react';
import { LabeledInputProps } from 'types/uiElements';

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  value,
  onChangeText,
  type = 'none',
  placeholder = '',
  multiline = false,
  numberOfLines = 1,
  style,
}) => {
  return (
    <View style={{ marginBottom: 15, height: multiline ? 100 : 50 }}>
      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5 }}>
        {label}
      </Text>
      <ThemedTextInput
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        textContentType={type}
        autoCapitalize={
          type === 'password' || type === 'emailAddress' ? 'none' : 'sentences'
        }
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 8,
          fontSize: 16,
          minHeight: multiline ? 80 : 35,
          textAlignVertical: multiline ? 'top' : 'auto',
          ...style,
        }}
      />
    </View>
  );
};

export default LabeledInput;
