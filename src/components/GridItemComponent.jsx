import React from "react";
import { Image, StyleSheet } from "react-native";
import styles from "../styles/styles";

export default function GridItemComponent({ image, imageSize }) {
  return (
    <Image
      source={{ uri: image }}
      style={{ width: imageSize, height: imageSize }}
      resizeMode="cover"
    ></Image>
  );
}
