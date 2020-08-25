import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

export type ColorBoxProps = {
  name: string;
  hex: string;
};

const ColorBox: FC<ColorBoxProps> = (props) => {
  const { name, hex } = props;
  const boxColor = { backgroundColor: hex };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.boxText}>
        Value of {hex} is {name}.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
  },
});

export default ColorBox;
