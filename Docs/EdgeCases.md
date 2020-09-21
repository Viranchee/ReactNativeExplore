# Edge Cases discovered and Issues faced

While making Tones, I failed countless times

### Playing a sound with `Expo`: 

Debug early and Often

Library should be React Native compatible, Tone library wasn't and I spent couple of minutes before finding out that the library returned undefined and crashed my App everytime

Using [Expo](https://docs.expo.io/versions/v38.0.0/sdk/audio/) to play Audio was tricky. It has some weird Audio state management.

When rendering multiple components - Map vs Flatlist: Use Flatlist, Maps are tricky for complex interfaces even with low component count

Make sure phone is not on silent mode while playing Audio.
