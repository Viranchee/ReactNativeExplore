## Typescript with React-Native

Using Typescript is confusing, and that's why we use the `any` and `unknown` types way too often.

I struggled with Typescript at the start of this project, like everyone new to Typescript. but then I discovered various ways to use Typescript and get all the Objects Typed.

How do I use the `Props`?
How do I pass `Props` to children?
How do I pass parameters when Navigating around the App?

React Native documentation helped, but figuring out Typescript Types was way faster.

I introduce to you, a simple hack. It's way too simple.
Remember Code Highlighting and Code Documentation in Xcode, same is supported in VSCode.

Write it all out in Javascript using the docs.

Example, while writing the Navigation part, I spent numerous days in trying to pass props.
I figured out there were 2 ways, `navigation.navigate` and `navigation.push`.
Both of these examples are presented in [this](../src/screens/NestedNavigation.tsx) file, line 42 and 48 respectively.

While writing them out, I checked the types of parameters they used, and then made an object inheriting that parameter.
It was a moment of discovery that time. I could express the joy of a child.
