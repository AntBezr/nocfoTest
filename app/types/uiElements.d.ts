export type ButtonSecondaryProps = {
  title: string;
};

export type ButtonProps = TouchableOpacityProps & {
  title: string;
  lightColor?: string;
  darkColor?: string;
};

export type LabeledInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
  numberOfLines?: number;
  style?: object;
};

export default {};
