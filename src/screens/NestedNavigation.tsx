import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

type NestedNavigationProps = { text: string };

const NestedNavigation: FC<NestedNavigationProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello {props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default NestedNavigation;
