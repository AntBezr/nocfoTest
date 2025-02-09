import React from "react";
import {
  ModalProps,
  ScrollViewProps,
  Text,
  TextInputProps,
  View,
} from "react-native";

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

export type TextProps = ThemeProps & Text["props"];
export type ViewProps = ThemeProps & View["props"];
export type ThemedTextInputProps = ThemeProps & TextInputProps;


