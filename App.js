import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "./contexts/ThemeContext";
import { Provider as PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import GalleryScreen from "./src/screens/GalleryScreen";
import MemoryDetailScreen from "./src/screens/MemoryDetailScreen";
import DailyJournalScreen from "./src/screens/DailyJournalScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === "dark");
  const theme = isDark ? DarkTheme : DefaultTheme;

  return (
    <ThemeContext.Provider
      value={{ isDark, toggleTheme: () => setIsDark(!isDark) }}
    >
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Gallery") {
                  iconName = focused ? "albums" : "albums-outline";
                } else if (route.name === "Memory Detail") {
                  iconName = focused
                    ? "information-circle"
                    : "information-circle-outline";
                } else if (route.name === "Daily Journal") {
                  iconName = focused ? "journal" : "journal-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "settings" : "settings-outline";
                }
                return (
                  <Ionicons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              },
              tabBarActiveTintColor: "skyblue",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerTitleAlign: "center" }}
            />
            <Tab.Screen
              name="Gallery"
              component={GalleryScreen}
              options={{ headerTitleAlign: "center" }}
            />
            <Tab.Screen
              name="Memory Detail"
              component={MemoryDetailScreen}
              options={{ headerTitleAlign: "center" }}
            />
            <Tab.Screen
              name="Daily Journal"
              component={DailyJournalScreen}
              options={{ headerTitleAlign: "center" }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ headerTitleAlign: "center" }}
            />
          </Tab.Navigator>
          <StatusBar style={isDark ? "light" : "dark"} />
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
}
