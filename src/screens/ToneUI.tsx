import Tone from "tone";
import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { RouteProp } from "@react-navigation/native";

type Stack = StackNavigationProp<RootStackParamList, "ToneUI">;
type Route = RouteProp<RootStackParamList, "ToneUI">;
type Props = {
  navigation: Stack;
  route: Route;
};

console.log("___");
console.log("Tone is:", Tone);
console.log("---");

// const synth = new Tone.PolySynth().toMaster();

const trackIndex = ["c0", "d0", "e0"];
const allTracks = ["Synth", "Clap", "Hat", "Kick"];
// Tone.Transport.bpm.value = 100;

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
  let stepIndex = React.useRef(0);

  React.useEffect(() => {
    if (playing) {
      // Tone.Transport.start();
      console.log("Start");
    } else {
      // Tone.Transport.stop();
      console.log("Stop");
    }
  }, [playing]);

  React.useEffect(() => {
    // Tone.Transport.cancel();
    // Tone.Transport.scheduleRepeat(function (time) {
    // tracks.forEach((track, index) => {
    // let chord =
    // stepIndex.current < 7 ? ["c4", "d#4", "g4"] : ["a#3", "d4", "g4"];
    // synth.triggerAttackRelease(chord, 0.5);
    // });

    // stepIndex.current = stepIndex.current > 14 ? 0 : stepIndex.current + 1;
    // }, "16n");
    console.log("tracks changed");
  }, [tracks]);

  function handleHat() {
    setPlaying((playing) => !playing);
  }

  const updateStep = React.useCallback(
    function (trackIndex: number, stepIndex: number) {
      let newTracks = [...tracks];

      // console.log(newTracks[trackIndex].st);
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
    width: 50,
  },
  trackStep: {
    height: 20,
    width: 15,
    margin: 2,
  },
});

export default ToneUI;
