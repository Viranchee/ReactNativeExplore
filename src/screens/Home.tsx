import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ColorPalette"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = (props: Props) => {
  return (
    <View style={[styles.container]}>
      <NavButton
        text="Doggos Here"
        onPress1={async () => props.navigation.navigate("Dogs")}
      />
      <NavButton
        text="Color Palette Here"
        onPress1={async () => props.navigation.navigate("ColorPalette")}
      />
      <StatusBar style="auto" />
    </View>
  );
};

type NavButtonProps = { text: string; onPress1: () => void };

const NavButton = (props: NavButtonProps) => {
  const { text, onPress1 } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        onPress1(); // push("ColorPalette");
      }}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
export default Home;
