# BLE

## Setup

This application follows two main resources:
1. The official **react-native-ble-plx** library [documentation](https://github.com/dotintent/react-native-ble-plx), which contains all the installation instructions and the official [wiki](https://github.com/dotintent/react-native-ble-plx/wiki).
2. This [BLE PLX](https://www.oneclickitsolution.com/blog/ble-plx-in-react-native/#FAQs) blog post, which contains the template code that was used for this. Some things are missing for the most part, so we had to go from there.

Additionally we require the **expo-location** libary, which is used to get the user's location. This is required for the BLE scanning to work.

## Current Status

For the application to run, it has to be build and then ran through the build, ie. `npx expo prebuild` and `npx expo run:android`. This is because the BLE library requires native code, which is not supported by the Expo GO client.

The app first asks the user for location permissions, scans for BLE devices and successfully connects to the RPico W server, however no data exchange has been implemented yet.

The app has no ability to send data to the server, however the server has the ability to receive it.

> Next things that have to be implemented is the data exchange between the app and the server, followed by a merger (after testing) with the existing app.

## Bugs

There seems to be a bug with the disconnecting process between the application and the device, which causes errors on both ends.

Once the device is connected and then disconnected. Even if the server is restarted, connecting to the device isn't possible due to a bug with the location permissions.