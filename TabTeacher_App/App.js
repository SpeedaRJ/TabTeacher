import * as SystemUI from 'expo-system-ui';

import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import SoonScreen from './components/SoonScreen';
import SongSelectScreen from './components/SongSelectScreen';
import PlaySongScreen from './components/PlaySongScreen';
import LessonsScreen from './components/LessonsScreen';

SystemUI.setBackgroundColorAsync("#1f1f1f");

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'roboto-r': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-b': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-i': require('./assets/fonts/Roboto-Italic.ttf'),
    'roboto-bl': require('./assets/fonts/Roboto-Black.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView} theme={{ colors: { background: '#fff' } }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Soon" component={SoonScreen} />
        <Stack.Screen name="Songs" component={SongSelectScreen} />
        <Stack.Screen name="Play" component={PlaySongScreen} />
        <Stack.Screen name="Lessons" component={LessonsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
