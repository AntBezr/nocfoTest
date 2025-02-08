import { TextProps } from "app/types/themedComponents";

import { Text } from "./Themed";

export default function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} />;
}
