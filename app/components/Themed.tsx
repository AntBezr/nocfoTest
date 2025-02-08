import {
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Colors from "@constants/Colors";
import { useColorScheme } from "../hooks/useColorScheme";
import {
  TextProps,
  ThemedModalProps,
  ThemedScrollViewProps,
  ThemedTextInputProps,
  ViewProps,
} from "app/types/themedComponents";
import { LinearGradient } from "expo-linear-gradient";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ThemedTextInput(props: ThemedTextInputProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <DefaultTextInput
      style={[
        {
          color,
          backgroundColor,
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#ccc",
        },
        style,
      ]}
      placeholderTextColor={color}
      {...otherProps}
    />
  );
}

export function ThemedScrollView(props: ThemedScrollViewProps) {
  const { style, lightColor, darkColor, contentContainerStyle, ...otherProps } =
    props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <ScrollView
      {...otherProps}
      contentContainerStyle={[
        { flexGrow: 1, padding: 20, backgroundColor },
        contentContainerStyle,
      ]}
      style={{ backgroundColor }}
    >
      {props.children}
    </ScrollView>
  );
}

export function ThemedModal({
  lightColor,
  darkColor,
  children,
  onClose,
  ...props
}: ThemedModalProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <Modal transparent animationType="fade" {...props}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          if (onClose) onClose();
        }}
        accessible={false}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <TouchableWithoutFeedback onPress={() => {}}>
            <View
              style={{
                backgroundColor,
                padding: 20,
                borderRadius: 10,
                width: "80%",
              }}
            >
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export function ThemedGradient() {
  const fadeStartColor = useThemeColor(
    { light: "rgba(247, 249, 252,1)", dark: "rgba(0,0,0,1)" },
    "background"
  );
  const fadeEndColor = useThemeColor(
    { light: "rgba(255,255,255,0)", dark: "rgba(18, 18, 18,0)" },
    "background"
  );

  return (
    <LinearGradient
      colors={[fadeStartColor, fadeEndColor]}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 30,
        zIndex: 1,
      }}
    />
  );
}
