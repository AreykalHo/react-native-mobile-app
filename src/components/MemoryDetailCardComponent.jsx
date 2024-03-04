import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { ThemeContext } from "../../contexts/ThemeContext";

export default function MemoryDetailCardComponent({
  imageSource,
  title,
  date,
  description,
}) {
  const { isDark } = useContext(ThemeContext);

  const memoryDetailStyles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      padding: 5,
      borderWidth: 0.5,
      borderColor: isDark ? "white" : "black",
      backgroundColor: isDark ? "#282828" : "white",
    },
    image: {
      width: "auto",
      height: 480,
    },
    titleText: {
      fontWeight: "bold",
      fontSize: 18,
      textAlign: "left",
      color: isDark ? "white" : "black",
    },
    dateText: {
      fontSize: 12,
      textAlign: "left",
      color: isDark ? "white" : "black",
    },
    descriptionText: {
      fontSize: 16,
      textAlign: "left",
      paddingVertical: 5,
      color: isDark ? "white" : "black",
    },
  });

  return (
    <View style={memoryDetailStyles.cardContainer}>
      <Image
        source={{ uri: imageSource }}
        style={memoryDetailStyles.image}
      ></Image>
      <Text style={{ color: "white" }}>{title}</Text>
      <Text style={memoryDetailStyles.dateText}>{date}</Text>
      <Text style={memoryDetailStyles.descriptionText}>{description}</Text>
    </View>
  );
}
