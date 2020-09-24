## Navigation and Data Passing

Catch: Using Typescript

I could display a screen in React Native.
But how do I make it display another screen?

### Introducing Navigation with React Native

React Native secretly adds `Navigation props` and `Route props` automatically to your passed `props` Component, albeit, if it lives inside a `NavigationContainer` component, shown [here](../App.tsx) line 31. Make sure to add `StackNavigator` component with `Stack.Screen` component linking to your screens in your App, [example here](../App.tsx) line 29.

The Navigation props have various methods to navigate around the App, including Stack Navigation.
The Route props have various variables, which are passed on from Parent Component to Child Component.
[This file](../src/screens/Home.tsx) contains most of the navigation code inside the app.

To navigate within the app using Stack Navigation, call this method: `props.navigation.navigate("ComponentName", {optional: propsAcceptedByComponentName})`

Yes. That's all it takes to navigate around.

### Introducing Typed Navigation

Now here is where the fun begins.
Remember from above, that React Native secretly adds `Navigation props` to your `props`.

These `props` need to be Typed for Typescript to work with.

I will show you how to do it. But it took me lots of time to get rolling with it.
Like every skill, grasping a new skill takes time. But once you are comfortable with it, wonders can happen.
Wonders like Refactoring the entire codebase with ease without breaking the app.

Let's start

#### Setup

Define a list of screens you want to present as a dictionary, [example](../App.tsx) line 14.

Key: The screen's name.

Value: The screen's data necessary to display it, kind of like it's dependencies. Use `undefined` if none.

And change the `createStackNavigation` method to `createStackNavigation<NewDictionary>`, as used [here](../App.tsx) line 23

Now whenever you use that Stack component, your editor will give the hints to Code Completion, because of the type we defined earlier.
This heavy lifting by Typescript simplifies development, reduces errors and makes systems robust!

#### Typed Screens

##### For screens with no dependencies

Just follow a simple example [here](../src/screens/Home.tsx) lines 9 to 13.

And when creating components, pass the defined `Prop` type as the type of the `props` the component receives

##### For screens with dependencies

It's the same step as above.
The passed parameter lives in `props.route.params.objectDefined`

And it's Typed.

This is all because of the magic of `Setup` step which we did. It makes writing React Native a breeze.
