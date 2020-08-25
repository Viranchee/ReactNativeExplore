import React, { FC } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  useRoute,
  StackRouter,
  StackRouterOptions,
  RouteProp,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type NestedNavStackProp = StackNavigationProp<
  RootStackParamList,
  "NestedNavigation"
>;

type NestedNavRouteProp = RouteProp<RootStackParamList, "NestedNavigation">;

type Props = {
  navigation: NestedNavStackProp;
  route: NestedNavRouteProp;
};

export interface NestedNavigationProps {
  text: string;
}

const NestedNavigation: FC<Props> = (props) => {
  const { route, navigation } = props;
  const text = route.params.text;

  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>Hello {route.params.text}</Text>
      <View style={styles.forwardButton}>
        <Text style={styles.forwardButtonText}>Move Forwards</Text>
      </View>
      <Button
        title="View Dogs screen from here"
        onPress={(_) => {
          navigation.navigate("Dogs");
        }}
        accessibilityLabel="View Dogs screen"
      />
      <Button
        title="RECURSION, with Navigate method"
        onPress={(_) => {
          navigation.navigate("NestedNavigation", { text: text + " ." });
        }}
      />
      <Button
        title="RECURSION"
        onPress={(_) => {
          navigation.push("NestedNavigation", { text: text + "." });
          // navigation.navigate("NestedNavigation", { text: text + "." });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  greetingText: {
    fontSize: 20,
    alignSelf: "center",
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  forwardButton: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "green",
    borderRadius: 10,
  },
  forwardButtonText: {
    fontSize: 18,
  },
});

export default NestedNavigation;
