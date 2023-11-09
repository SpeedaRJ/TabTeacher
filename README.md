# TabTeacher

## Pre-requisites

### Arduino IDE

Download and install the Arduino IDE from [here](https://www.arduino.cc/en/Main/Software).

To then properly work with the current working code, the following libraries are required:
* [Adafruit NeoPixel Library](https://github.com/adafruit/Adafruit_NeoPixel)
* [FireBase ESP Client Library](https://github.com/mobizt/Firebase-ESP-Client)
* The [Arduino ESP32](https://github.com/espressif/arduino-esp32) library board management.

All the required documentation for the above libraries can be found in their respective GitHub repositories.   
If something still isn't working on the side of the controller, useful things to try include installing the [serial drivers](https://linuxhint.com/install-esp32-cp2102-serial-driver/) and the [dev kit package](https://www.electronics-lab.com/getting-started-with-espressifs-esp32-c3-devkitm-1-on-arduino-ide/#google_vignette).   
For future development a look at the [BLE library](https://www.arduino.cc/reference/en/libraries/esp32-ble-arduino/) might be useful.

If we switch to a different controller, the above libraries might not be required anymore and this file would require and update.

### React Native

The react native app is built using [Expo](https://expo.io/). For all the requirements to run and develop the app, a simple `npm install` should suffice in the `./TabTeacher_App` directory. If that doesn't suffice the steps on [this link](https://reactnative.dev/docs/environment-setup) should be followed.  

In addition [EAS](https://www.npmjs.com/package/eas-cli) should be installed. To do so, run
```
npm install -g eas-cli
```
If you're running this on a Linux machine, you'll probably need to prefix the above command with `sudo`.

 This is used for publishing the application to the expo application during the development process. Some additional info available in the [Expo documentation](https://docs.expo.dev/eas-update/getting-started/).

## Development

The following instructions are to be run in the `./TabTeacher_App` directory.

### First run on a device

When you want to run the app in dev mode for the first time on any device, you first have to install the dev app on that device. To do so, run
```
eas build:run -p android
```

### Local development

The development can be run locally on an emulator or on a physical device using 
```
npx expo start -c --tunnel
```
The `-c` flag clears the cache, while the `--tunnel` flag ensures a more stable connection to the physical device, at least during my testing. Both flags are optional.

#### Connected device

To actually connect a physical device, I used [ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/). Basically the command `adb devices` is used to find the device name, which is then used to create a debugging link using the command `adb -s <device name> reverse tcp:8081 tcp:8081`. This should ensure a stable connection to the device (connected via USB to the computer). 

#### Non-connected device

To develop on a physical device not connected to the computer, first you should install the Expo Go app for either [Apple](https://apps.apple.com/us/app/expo-go/id982107779) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www).

To access the development application through Expo Go, a login has been made using the development account. The credentials are available in the [credentials file](./TabTeacher_App/credentials.json). The account is also available on the [Expo website](https://expo.io/@tabteacher).   
This same account is used to upload the development application to the Expo infrastructure through `eas login`, followed by `eas update`. If these commands don't work, either run them with the `npx ...` command or enter the `npx` environment by simply typing that command.

### Additionally

If new libraries are required to enable new features, they should be installed using 
```
npx expo install <library>
```

## Additional information

As of right now the development is focused on one branch. This should be expanded upon. We can talk about this in the next meeting sometime soon.

Also all of the development should be logged in the `./CHANGELOG.md` file in a structured manner. Ideally in the format:
```
## [date] - [author] - [branch] - [version]
### Updates
* [feature 1]
* [feature 2]
* ...

### Bug Fixes
* [bug fix 1]
* ...

### Known Issues
* [issue 1]
* ...
```

There is another file `./DEVELOPMENT.md` which contains some *TODOs* and completed tasks/features. This was own personal log, and I will update it as we go/as need be.