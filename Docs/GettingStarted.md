### Getting Started with React Native

Javascript knowledge is highly required because that's what we are going to use while making React Native apps. HTML Structure can help as well

A mobile platform knowledge would be bonus, either iOS or Android

It uses the same JSX, albeit, just different Component tags rather than the usual web `h1` and `p`, you would be using a `Text` tag

### Install these

Xcode - App Store

VS Code or WebStorm - These help hugely while writing code with auto completes

Node version 12 or higher - `brew install node`

Expo-CLI - `npm install -g expo-cli`

### Dev Environment

Since MacOS has improved Privacy features and warns before any app can access a user's folder, so for simplicity, I have my ReactNative files and folders in the Current User's Home directory

### Building your first App

Run these commands in terminal:

``` bash
expo init Demo
cd Demo
expo start
```

Your web browser will fireup, and display a QR code. To see the app in your mobile phone, download the `expo` app from the App/Play store and scan the QR code.

To run in simulator, run `expo start --ios`

### Workflow

I used Typescript for better debugability.
