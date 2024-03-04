import React from "react";
import { FlatList, View, Text, StyleSheet, Image } from "react-native";

export default function CarouselItemComponent({ image }) {
  return (
    <View style={carouselStyles.item}>
      <Image source={{ uri: image }} style={carouselStyles.image}></Image>
    </View>
  );
}

const carouselStyles = StyleSheet.create({
  item: {
    height: 360,
    width: 360,
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
