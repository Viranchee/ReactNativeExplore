### Let's build an Image Viewer

An Array of images are displayed on the user's screen
They are scrollable

For this, we need React Native's these components:
- Image : The Image component, simply
``` js
<Image
  source={{ uri: doggo.url }}
  style={styles.dogImage}
  resizeMode="cover"
  accessible={true}
  accessibilityLabel="dog"
/>
```
It's corresponding style
``` json
  dogImage: {
    height: Dimensions.get("window").width / 2,
    width: Dimensions.get("window").width / 2,
    padding: 10,
  },
```

- TouchableOpacity : For detecting touches
``` js
<TouchableOpacity
  key={doggo.id}
  onPress={() => {
    selection(doggo);
  }}>
  <ImageFromAbove/>
</TouchableOpacity>
```

- FlatList : This is similar to TableView, CollectionView and has scrolling behaviour
``` js
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
      <TouchableOpacityComponentDescribedAbove/>
    );
  }}
/>
```

- View : To wrap the FlatList 
``` js
<View style={styles.container}>
  <FlatListDefinedAbove/>
</View>
```

To make it more interactive, i.e. when user taps the Image, let's display a modal with that image.
For that, we need a Modal component
``` js
<Modal transparent={true} visible={!!selectedDog} animationType="fade">
  {selectedDog ? (
    <View style={styles.modal}>
      <AModalComponent/>
    </View>
  ) : null}
</Modal>
```
and it's style:

``` json
modal: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0,0.5)",
}
```

For the modal's content, let's render an image

``` js
<Image
  source={{ uri: selectedDog.url }}
  style={styles.modalImage}
  resizeMode="cover"
  accessible={true}
  accessibilityLabel="Dog, Full Screen"
/>
```
and it's style
``` json
modalImage: {
  height: Dimensions.get("window").width * 0.9,
  width: Dimensions.get("window").width * 0.9,
}
```

And let's wrap the image inside a TouchableOpacity, so whenever user taps, the modal gets dismissed
``` js
<TouchableOpacity onPress={() => setSelectedDog(null)}>
  <ImageDescribedAbove/>
</TouchableOpacity>
```

