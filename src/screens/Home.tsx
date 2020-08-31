import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { RouteProp } from "@react-navigation/native";

type Stack = StackNavigationProp<RootStackParamList, "Home">;
type Route = RouteProp<RootStackParamList, "Home">;
type Props = {
  navigation: Stack;
  route: Route;
};

// This is Home Screen, it takes no other props, only the Default ones
// It houses all the navigation logic here.
// React-Navigation library is used
// This screen can go to any of the screens wrapped in a NavButton
const Home: React.FC<Props> = (props) => {
  const { navigation } = props;
  return (
    <View style={[styles.container]}>
      <NavButton
        text="Doggos Here"
        onPress1={async () => navigation.navigate("Dogs")}
      />
      <NavButton
        text="Color Palette Here"
        onPress1={async () => navigation.navigate("ColorPalette")}
      />
      <NavButton
        text="Dogs Carousel Here"
        onPress1={async () => navigation.navigate("DogsCarousel")}
      />
      <NavButton
        text="Nested Navigation Here"
        onPress1={async () =>
          navigation.navigate("NestedNavigation", {
            text: "-I passed this TEXT-",
          })
        }
      />
      <StatusBar style="auto" />
    </View>
  );
};

type NavButtonProps = { text: string; onPress1: () => void };

// A NavButton takes a string and an onPress1 event
// It runs onPress1 whenever it's onPress event is triggered
// It displays the text prop as regular Text which is clickable because of Touchable Opacity
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
