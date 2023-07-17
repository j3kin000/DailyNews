import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Navigation from './src/navigation';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Navigation navigation={undefined} />;
};
export default App;
