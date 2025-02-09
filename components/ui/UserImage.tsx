import { View } from "@components/Themed";
import React from "react";
import { Image } from "react-native";

const UserImage = ({ image }: { image: string }) => {
  return (
    <View>
      <Image
        source={require("@assets/images/user.jpg")}
        style={{
          width: 140,
          height: 140,
          borderRadius: 120,
          resizeMode: "cover",
        }}
      />
    </View>
  );
};

export default UserImage;
