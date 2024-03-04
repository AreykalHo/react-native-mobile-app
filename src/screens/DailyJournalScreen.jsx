import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import DailyJournalCardComponent from "../components/DailyJournalCardComponent";

export default function DailyJournalScreen() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("Happy");
  const [entry, setEntry] = useState("");

  const [submittedElements, setSubmittedElements] = useState([]);

  const handleSubmit = () => {
    const newElement = (
      <DailyJournalCardComponent
        title={title}
        date={date}
        mood={mood}
        entry={entry}
      />
    );

    setSubmittedElements([...submittedElements, newElement]);

    setTitle("");
    setDate("");
    setMood("Happy");
    setEntry("");
  };

  const { isDark } = useContext(ThemeContext);

  const dailyJournalStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: isDark ? "#282828" : "white",
    },
    inputBox: {
      borderWidth: 1,
      padding: 10,
      width: "90%",
      marginVertical: 10,
      color: isDark ? "white" : "black",
      borderColor: isDark ? "white" : "black",
    },
  });

  return (
    <View style={dailyJournalStyles.container}>
      <TextInput
        value={title}
        onChangeText={(title) => setTitle(title)}
        placeholder="Enter the title"
        placeholderTextColor={isDark ? "white" : "black"}
        style={dailyJournalStyles.inputBox}
      ></TextInput>
      <TextInput
        value={date}
        onChangeText={(date) => setDate(date)}
        placeholder="Enter the date"
        placeholderTextColor={isDark ? "white" : "black"}
        style={dailyJournalStyles.inputBox}
      ></TextInput>
      <Picker
        selectedValue={mood}
        onChangeText={(mood) => setMood(mood)}
        style={dailyJournalStyles.inputBox}
        mode="dropdown"
      >
        <Picker.Item
          label="Happy"
          value="Happy"
        ></Picker.Item>
        <Picker.Item
          label="Meh"
          value="Meh"
        ></Picker.Item>
        <Picker.Item
          label="Sad"
          value="Sad"
        ></Picker.Item>
      </Picker>
      <TextInput
        value={entry}
        onChangeText={(entry) => setEntry(entry)}
        placeholder="Enter the entry"
        placeholderTextColor={isDark ? "white" : "black"}
        style={dailyJournalStyles.inputBox}
      ></TextInput>
      {/* <Button
        title="Submit"
        onPress={() =>
          alert(`Title: ${title} Date: ${date} Mood: ${mood} Entry: ${entry}`)
        }
      ></Button> */}
      <Button
        title="Submit"
        onPress={handleSubmit}
      ></Button>
      {submittedElements.length > 0
        ? submittedElements.map((element) => element)
        : null}
    </View>
  );
}
