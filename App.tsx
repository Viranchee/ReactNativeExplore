import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import ColorPalette from "./src/screens/ColorPalette";
import Dogs from "./src/screens/Dogs";
import DogsCarousel from "./src/screens/DogsCarousel";

export type RootStackParamList = {
  Home: undefined;
  ColorPalette: undefined;
  Dogs: undefined;
  DogsCarousel: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} />
        <Stack.Screen name="Dogs" component={Dogs} />
        <Stack.Screen name="DogsCarousel" component={DogsCarousel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
