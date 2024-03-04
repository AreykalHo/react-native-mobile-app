import React, { useContext } from "react";
import {
  View,
  ScrollView,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
} from "react-native";
import CarouselItemComponent from "../components/CarouselItemComponent";
import GridItemComponent from "../components/GridItemComponent";
import { ThemeContext } from "../../contexts/ThemeContext";

const featuredImages = [
  "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const gridImages = [
  "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1379640/pexels-photo-1379640.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1270184/pexels-photo-1270184.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default function GalleryScreen() {
  const columnCount = 2;
  const windowWidth = Dimensions.get("window").width;
  const imageSize = windowWidth / columnCount;

  const { isDark } = useContext(ThemeContext);

  const galleryStyles = StyleSheet.create({
    sectionTitle: {
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center",
      color: isDark ? "white" : "black",
    },
    gridContainer: {
      flex: 1,
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: isDark ? "#282828" : "white" }}
    >
      <Text style={galleryStyles.sectionTitle}>Featured</Text>
      <FlatList
        data={featuredImages}
        renderItem={({ item }) => <CarouselItemComponent image={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
      <Text style={galleryStyles.sectionTitle}>Responsive Grid</Text>
      <View style={galleryStyles.gridContainer}>
        {gridImages.map((image, index) => (
          <GridItemComponent
            key={index}
            image={image}
            imageSize={imageSize}
          ></GridItemComponent>
        ))}
      </View>
    </ScrollView>
  );
}
