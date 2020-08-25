import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import ColorBox, { ColorBoxProps } from "../components/ColorBox";

const ColorPalette = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here are some boxes of different colors</Text>
      <ColorBox name="Cyan" hex="#2aa198" />
      <ColorBox name="Blue" hex="#268bd2" />
      <ColorBox name="Magenta" hex="#d33682" />
      <ColorBox name="Orange" hex="#cb4b16" />
      <FlatList
        data={colorsAll}
        keyExtractor={(item, index) => item.name}
        renderItem={({ item }) => <ColorBox name={item.name} hex={item.hex} />}
      />
    </View>
  );
};

const colorsAll: Array<ColorBoxProps> = [
  { name: "Cyan", hex: "#2aa198" },
  { name: "Blue", hex: "#268bd2" },
  { name: "Magenta", hex: "#d33682" },
  { name: "Orange", hex: "#cb4b16" },
];

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default ColorPalette;
