import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import ColorPalette from "./src/screens/ColorPalette";
import Dogs from "./src/screens/Dogs";
import DogsCarousel from "./src/screens/DogsCarousel";
import NestedNavigation, {
  NestedNavigationProps,
} from "./src/screens/NestedNavigation";
import ToneUI from "./src/screens/ToneUI";

export type RootStackParamList = {
  Home: undefined;
  ColorPalette: undefined;
  Dogs: undefined;
  DogsCarousel: undefined;
  ToneUI: undefined;
  NestedNavigation: NestedNavigationProps;
};

const Stack = createStackNavigator<RootStackParamList>();

// The above variables are only for TypeScript.
// This is where my App starts
// Here is how the architecture of the app is laid out
// It is all Stacks of screens and nothing else, inside a Navigation Container
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} />
        <Stack.Screen name="Dogs" component={Dogs} />
        <Stack.Screen name="DogsCarousel" component={DogsCarousel} />
        <Stack.Screen name="ToneUI" component={ToneUI} />
        <Stack.Screen name="NestedNavigation" component={NestedNavigation} />
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
