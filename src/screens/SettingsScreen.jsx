import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-paper";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function SettingsScreen() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isDark ? "#282828" : "white",
      }}
    >
      <Text style={{ color: isDark ? "white" : "black" }}>Dark Mode</Text>
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
      ></Switch>
    </View>
  );
}
