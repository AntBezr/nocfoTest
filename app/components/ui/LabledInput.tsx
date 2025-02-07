import { Text, ThemedTextInput, View } from "@components/Themed";
import { LabeledInputProps } from "app/types/uiElements";
import React from "react";
const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  value,
  onChangeText,
  multiline = false,
  numberOfLines = 1,
  style,
}) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 5 }}>
        {label}
      </Text>
      <ThemedTextInput
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 8,
          fontSize: 16,
          minHeight: multiline ? 80 : undefined,
          textAlignVertical: multiline ? "top" : "auto",
          ...style,
        }}
      />
    </View>
  );
};

export default LabeledInput;
