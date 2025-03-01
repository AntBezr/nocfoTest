import { useThemeColor } from '@components/Themed';
import { GestureResponderEvent, TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from 'types/uiElements';

function Button({
  title,
  lightColor,
  darkColor,
  onPress,
  style,
  ...props
}: ButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'tint',
  );
  const textColor = useThemeColor({ light: '#fff', dark: '#fff' }, 'text');

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor,
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          alignItems: 'center',
          opacity: props.disabled ? 0.5 : 1,
          marginVertical: 5,
          shadowColor: '#000',
          shadowOpacity: 0.2,
          shadowRadius: 5,
          width: 200,
        },
        style,
      ]}
      {...props}
      onPress={(event: GestureResponderEvent) => onPress?.(event)}
    >
      <Text style={{ color: textColor, fontWeight: '600' }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
