import { GestureResponderEvent, TouchableOpacityProps } from "react-native";

export type ButtonSecondaryProps = {
  title: string;
};

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  lightColor?: string;
  darkColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: any;
}

export type LabeledInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  numberOfLines?: number;
  style?: object;
};

export type SwitchProps = {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};
