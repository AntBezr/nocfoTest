import ProfileIcon from "@assets/icons/profile.svg";
import SettingsIcon from "@assets/icons/settings.svg";
import ListIcon from "@assets/icons/storage.svg";
import React from "react";
import { View, Text } from "react-native";

import { TabBarIconProps } from "../types/navigation";

const TabBarIcon: React.FC<TabBarIconProps> = ({ tabName, color }) => {
  const tabIcon = () => {
    switch (tabName) {
      case "list":
        return <ListIcon style={{ marginBottom: -3 }} color={color} />;
      case "profile":
        return <ProfileIcon style={{ marginBottom: -3 }} color={color} />;
      case "settings":
        return <SettingsIcon style={{ marginBottom: -3 }} color={color} />;
      default:
        return <ListIcon style={{ marginBottom: -3 }} />;
    }
  };
  return (
    <View className="w-16 h-16 flex py-2  items-center">
      <View className="pb-[2px]" />
      <Text
        style={{ color }}
        className="text-tabbar leading-[10.8px] font-nimbusSansBol"
      >
        {tabIcon()}
      </Text>
    </View>
  );
};

export default TabBarIcon;
