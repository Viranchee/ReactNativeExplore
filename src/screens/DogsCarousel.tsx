import React, { useState, useRef, useCallback, useEffect, FC } from "react";
import { dogs, Dog } from "../data/dogs";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { RouteProp } from "@react-navigation/native";

type Stack = StackNavigationProp<RootStackParamList, "DogsCarousel">;
type Route = RouteProp<RootStackParamList, "DogsCarousel">;

type Props = {
  navigation: Stack;
  route: Route;
};

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const DogsCarousel: FC<Props> = (props) => {
  const localDogs = dogs;
  const [index, setindex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);
      const distance = Math.abs(roundIndex - index);
      const isNoMansLand = 0.4 < distance;
      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setindex(roundIndex);
      }
    },
    [],
  );

  return (
    <FlatList
      data={localDogs}
      style={styles.container}
      renderItem={({ item }) => {
        return <DogView dog={item} />;
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
      initialNumToRender={0}
      maxToRenderPerBatch={2}
      removeClippedSubviews={true}
      scrollEventThrottle={16}
      windowSize={2}
      keyExtractor={(val) => val.id.toString()}
      getItemLayout={(item, index) => {
        return { index, length: windowWidth, offset: index * windowWidth };
      }}
    />
  );
};

const DogView = (props: { dog: Dog }) => {
  const { dog } = props;
  return (
    <View style={styles.dogCell}>
      <Image source={{ uri: dog.url }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dogCell: {
    flex: 1,
    backgroundColor: "white",
    width: windowWidth,
    height: windowHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: windowWidth,
    height: windowHeight,
  },
  largeText: {
    fontSize: 24,
  },
  smallText: {
    fontSize: 18,
  },
});

export default DogsCarousel;
