import React from "react";
import { Audio } from "expo-av";
import { Button, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
// TS Prop Drilling
import { RootStackParamList } from "../../App";
import { RouteProp } from "@react-navigation/native";

// can be put in different file
async function playHat() {
  Audio.Sound.createAsync(require("../../assets/sounds/hat.wav"), {
    shouldPlay: true,
  });
}
async function playClap() {
  Audio.Sound.createAsync(require("../../assets/sounds/clap.wav"), {
    shouldPlay: true,
  });
}
async function playKick() {
  Audio.Sound.createAsync(require("../../assets/sounds/kick.wav"), {
    shouldPlay: true,
  });
}
// export this function
async function playSound(file: number = 1) {
  console.log(file);
  switch (file) {
    case 0:
      await playHat();
      break;

    case 1:
      await playClap();
      break;

    case 2:
      await playKick();
      break;

    case 3:
      await playHat();
      break;
  }
}

type Stack = StackNavigationProp<RootStackParamList, "ToneUI">;
type Route = RouteProp<RootStackParamList, "ToneUI">;
type Props = {
  navigation: Stack;
  route: Route;
};

const allTracks = ["Synth", "Clap", "Hat", "Kick"];

const generateSteps = () => {
  let steps = [];
  for (let i = 0; i < 16; i++) {
    steps.push(0);
  }
  return steps;
};

const initialSteps = allTracks.map((t) => ({
  name: t,
  steps: generateSteps(),
}));

const ToneUI: React.FC<Props> = (props) => {
  let [playing, setPlaying] = React.useState(false);
  let [tracks, setTracks] = React.useState(initialSteps);

  React.useEffect(() => {
    if (playing) {
      console.log("Start");
    } else {
      console.log("Stop");
    }
  }, [playing]);

  React.useEffect(() => {}, [tracks]);

  function handleHat() {
    setPlaying((playing) => !playing);
  }

  const updateStep = React.useCallback(
    function (trackIndex: number, stepIndex: number) {
      let newTracks = [...tracks];
      newTracks[trackIndex].steps[stepIndex] =
        newTracks[trackIndex].steps[stepIndex] === 0 ? 1 : 0;
      setTracks(newTracks);
    },
    [tracks, setTracks],
  );

  return (
    <View style={styles.container}>
      <Button title={playing ? "Stop" : "Play"} onPress={handleHat} />
      <FlatList
        data={tracks}
        style={styles.borderBox}
        scrollEnabled={false}
        keyExtractor={(_, index) => {
          return `track-${index}`;
        }}
        renderItem={({ item: track, index }) => {
          return (
            <View style={styles.trackBox}>
              <FlatList
                data={track.steps}
                horizontal
                scrollEnabled={false}
                keyExtractor={(_, index) => {
                  return index.toString();
                }}
                ListHeaderComponent={() => {
                  return (
                    <View style={styles.trackName}>
                      <Text>{track.name}</Text>
                    </View>
                  );
                }}
                renderItem={(val) => {
                  return (
                    <ToneStepBox
                      index={val.index}
                      stepIndex={val.item}
                      pressCallback={() => {
                        updateStep(index, val.index);
                        playSound(index);
                      }}
                    />
                  );
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const ToneStepBox: React.FC<{
  index: number;
  stepIndex: number;
  pressCallback: Function;
}> = ({ index, stepIndex, pressCallback }) => {
  return (
    <TouchableOpacity
      key={`step-${index}-${stepIndex}`}
      onPress={(_) => {
        pressCallback();
      }}>
      <View style={[styles.trackStep, { backgroundColor: "gray" }]}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  borderBox: {
    padding: 10,
    marginTop: 20,
  },
  trackBox: {
    marginVertical: 5,
    display: "flex",
    flexWrap: "wrap",
  },
  trackName: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "auto",
    width: 50,
  },
  trackStep: {
    height: 20,
    width: 15,
    margin: 2,
  },
});

export default ToneUI;
