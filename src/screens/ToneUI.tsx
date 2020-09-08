import Tone from "tone";
import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
const tracks = ["Synth", "Synth"];
// Tone.Transport.bpm.value = 100;

const generateSteps = () => {
  let steps = [];
  for (let i = 0; i < 16; i++) {
    steps.push(0);
  }
  return steps;
};

const initialSteps = tracks.map((t) => ({
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

  // React.useEffect(() => {
  //   Tone.Transport.cancel();
  //   Tone.Transport.scheduleRepeat(function (time) {
  //     tracks.forEach((track, index) => {
  //       let chord =
  //         stepIndex.current < 7 ? ["c4", "d#4", "g4"] : ["a#3", "d4", "g4"];
  //       synth.triggerAttackRelease(chord, 0.5);
  //     });

  //     stepIndex.current = stepIndex.current > 14 ? 0 : stepIndex.current + 1;
  //   }, "16n");
  // }, [tracks]);

  function handleHat() {
    // setPlaying((playing) => !playing);
    console.log("Tapped");
  }

  // const updateStep = React.useCallback(
  //   function (trackIndex, stepIndex) {
  //     let newTracks = [...tracks];

  //     newTracks[trackIndex].steps[stepIndex] =
  //       newTracks[trackIndex].steps[stepIndex] === 0 ? 1 : 0;
  //     setTracks(newTracks);
  //   },
  //   [tracks, setTracks],
  // );

  return (
    <View style={styles.container}>
      <Button title={playing ? "Stop" : "Play"} onPress={handleHat} />
      <View style={styles.borderBox}>
        {tracks.map((track, index) => {
          return (
            <View key={`track-${index}`} style={styles.trackBox}>
              <View style={styles.trackName}>
                <Text>{track.name}</Text>
              </View>
              {track.steps.map((s, stepIndex) => {
                return (
                  <TouchableOpacity
                    key={`step-${index}-${stepIndex}`}
                    onPress={() => {
                      // updateStep(index, stepIndex);
                      console.log("TrackStep Pressed");
                    }}>
                    <View
                      style={[
                        styles.trackStep,
                        { backgroundColor: s === 0 ? "gray" : "green" },
                      ]}></View>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  borderBox: {
    borderWidth: 1,
    borderColor: "#f00",
    padding: 10,
    marginTop: 20,
  },
  trackBox: {
    alignItems: "center",
    display: "flex",
  },
  trackName: {
    width: 100,
  },
  trackStep: {
    height: 20,
    width: 15,
    margin: 2,
  },
});

export default ToneUI;
