import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import HomeCardComponent from "../components/HomeCardComponent";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function HomeScreen({ navigation }) {
  const { isDark } = useContext(ThemeContext);

  const homeScreenStyles = StyleSheet.create({
    container: {
      flexGrow: 1,
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDark ? "#282828" : "white",
    },
    addMemorySection: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      borderColor: "black",
      borderWidth: 0.75,
      backgroundColor: isDark ? "#282828" : "white",
    },
    feedHeader: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 18,
      color: isDark ? "white" : "black",
    },
  });

  return (
    <ScrollView contentContainerStyles={homeScreenStyles.container}>
      <TouchableOpacity style={homeScreenStyles.addMemorySection}>
        <Ionicons
          name="add-circle"
          size={48}
          color={isDark ? "white" : "black"}
        />

        <Text style={{ color: isDark ? "white" : "black" }}>
          Add New Memories
        </Text>
      </TouchableOpacity>

      <Text style={homeScreenStyles.feedHeader}>My Memories</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Memory Detail")}>
        <HomeCardComponent
          imageSource={
            "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          date={"01/03/2024"}
          title={"An Audi R8"}
        ></HomeCardComponent>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Memory Detail")}>
        <HomeCardComponent
          imageSource={
            "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          date={"01/03/2024"}
          title={"LandScape Photography During Sunset"}
        ></HomeCardComponent>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Memory Detail")}>
        <HomeCardComponent
          imageSource={
            "https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          date={"01/03/2024"}
          title={"Light Bulb"}
        ></HomeCardComponent>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Memory Detail")}>
        <HomeCardComponent
          imageSource={
            "https://images.pexels.com/photos/1662298/pexels-photo-1662298.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          date={"04/03/2024"}
          title={"Steel Wool Photography"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Memory Detail")}>
        <HomeCardComponent
          imageSource={
            "https://images.pexels.com/photos/1435075/pexels-photo-1435075.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          date={"04/03/2024"}
          title={"Fisherman at Sea"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Memory Detail")}>
        <HomeCardComponent
          imageSource={
            "https://images.pexels.com/photos/1645668/pexels-photo-1645668.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          date={"04/03/2024"}
          title={"Crystal Ball"}
        />
      </TouchableOpacity>
    </ScrollView>
  );
}
