import { ThemedTextInput, View } from "@components/Themed";
import React from "react";

const SearchInput = (style) => {
  return (
    <View>
      <ThemedTextInput
        placeholder="Search"
        style={[
          {
            marginHorizontal: 16,
            borderRadius: 10,
          },
          style,
        ]}
      />
    </View>
  );
};

export default SearchInput;
