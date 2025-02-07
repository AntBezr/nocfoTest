import { ModalProps, ScrollViewProps } from "react-native";

export interface ThemedModalProps extends ModalProps {
  lightColor?: string;
  darkColor?: string;
  children: React.ReactNode;
  onClose?: () => void;
}
export interface ThemedScrollViewProps extends ScrollViewProps {
  lightColor?: string;
  darkColor?: string;
}

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText["props"];
export type ViewProps = ThemeProps & DefaultView["props"];
export type ThemedTextInputProps = ThemeProps & TextInputProps;

export default {};
