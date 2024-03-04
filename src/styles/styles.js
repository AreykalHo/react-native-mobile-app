import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export const darkTheme = {
  containerBackgroundColor: "black",
  containerViewColor: "white",
  textColor: "white",
  switchButtonBackgroundColor: "#ccc",
};

export const lighTheme = {
  containerBackgroundColor: "white",
  containerViewColor: "black",
  textColor: "black",
  switchButtonBackgroundColor: "#ccc",
};
