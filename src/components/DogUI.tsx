import React from "react";
import { TouchableOpacity, Dimensions, Image, StyleSheet } from "react-native";
import { Dog } from "../data/dogs";

// A DogUI accepts a Dog and a selection
// It gives out following HTML structure:
// An Image wrapped in TouchableOpacity
// The image displays the Dog's photo with accessibility
// The TouchapleOpacity makes it perform actions onPress
// It's StyleSheet is defined below
export default function DogUI(props: {
  doggo: Dog;
  selection: (dog: Dog) => void;
}) {
  const { doggo, selection } = props;
  return (
    <TouchableOpacity
      key={doggo.id}
      onPress={() => {
        selection(doggo);
      }}>
      <Image
        source={{ uri: doggo.url }}
        style={styles.dogImage}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel="dog"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  dogImage: {
    height: Dimensions.get("window").width / 2,
    width: Dimensions.get("window").width / 2,
    padding: 10,
  },
});
