import React, { useState, useRef, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function DailyJournalCardComponent({
  date,
  title,
  mood,
  entry,
}) {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const { isDark } = useContext(ThemeContext);

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.timing(animatedHeight, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const dailyJournalCardComponentStyles = StyleSheet.create({
    tile: {
      marginVertical: 10,
      paddingHorizontal: 20,
      paddingVertical: 15,
      backgroundColor: isDark ? "grey" : "skyblue",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "90%",
      height: "auto",
    },
    tileText: {
      color: isDark ? "white" : "black",
    },
  });

  return (
    <TouchableOpacity
      onPress={toggleExpand}
      style={dailyJournalCardComponentStyles.tile}
    >
      <Text style={dailyJournalCardComponentStyles.tileText}>
        Title: {title}
      </Text>
      <Text style={dailyJournalCardComponentStyles.tileText}>Date: {date}</Text>
      {expanded ? (
        <View>
          <Text style={dailyJournalCardComponentStyles.tileText}>
            Mood: {mood}
          </Text>
          <Text style={dailyJournalCardComponentStyles.tileText}>
            Entry {entry}
          </Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
