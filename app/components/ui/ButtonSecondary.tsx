import { useThemeColor } from "@components/Themed";
import { ButtonProps } from "app/types/uiElements";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

function Button({
  title,
  lightColor,
  darkColor,
  style,
  ...props
}: ButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "tint"
  );
  const textColor = useThemeColor({ light: "#fff", dark: "#fff" }, "text");

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor,
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          alignItems: "center",
          opacity: props.disabled ? 0.5 : 1,
          marginVertical: 5,
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowRadius: 5,
          width: 200,
        },
        style,
      ]}
      {...props}
      onPress={() => {
        if (props.onPress) {
          props.onPress();
        } else {
          console.log(`No onPress function for ${title}`);
        }
      }}
    >
      <Text style={{ color: textColor, fontWeight: "600" }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
