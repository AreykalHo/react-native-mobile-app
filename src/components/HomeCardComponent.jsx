import React, { useContext } from "react";
import { Text, Image, StyleSheet, View } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function HomeCardComponent({ imageSource, title, date }) {
  const { isDark } = useContext(ThemeContext);

  const cardStyles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      padding: 5,
      borderWidth: 1,
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
  });

  return (
    <View style={cardStyles.cardContainer}>
      <Image
        source={{ uri: imageSource }}
        style={cardStyles.image}
      ></Image>

      <Text style={cardStyles.titleText}>{title}</Text>

      <Text style={cardStyles.dateText}>{date}</Text>
    </View>
  );
}
