import React, { useState, FC } from "react";
import { StyleSheet, Text, View, Modal, Image, Dimensions } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import DogUI from "../components/DogUI";
import { Dog, dogs } from "../data/dogs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { RouteProp } from "@react-navigation/native";

type Stack = StackNavigationProp<RootStackParamList, "Dogs">;
type Route = RouteProp<RootStackParamList, "Dogs">;
type Props = {
  navigation: Stack;
  route: Route;
};

const Dogs: FC<Props> = (props) => {
  const [selectedDog, setSelectedDog] = useState<null | Dog>();
  const localDogs = dogs;
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.text}>Here are some dog photos</Text>
        }
        horizontal={false}
        numColumns={2}
        style={{ flexDirection: "row", flexWrap: "wrap" }}
        data={localDogs}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => {
          return (
            <DogUI
              doggo={item}
              selection={(dog) => {
                setSelectedDog(dog);
              }}
            />
          );
        }}
      />
      <Modal transparent={true} visible={!!selectedDog} animationType="fade">
        {selectedDog ? (
          <View style={styles.modal}>
            <TouchableOpacity onPress={() => setSelectedDog(null)}>
              <Image
                source={{ uri: selectedDog.url }}
                style={styles.modalImage}
                resizeMode="cover"
                accessible={true}
                accessibilityLabel="Dog, Full Screen"
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    padding: 10,
  },
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalImage: {
    height: Dimensions.get("window").width * 0.9,
    width: Dimensions.get("window").width * 0.9,
  },
});

export default Dogs;
