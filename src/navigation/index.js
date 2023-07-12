import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/home.screen';
import NewsDetail from '../screens/news-detail/news-detail.screen';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from '../store/store';
import {PersistGate} from 'redux-persist/integration/react';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#dddddd',
    secondary: '#FFA500',
  },
};
const Stack = createStackNavigator();

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <SafeAreaView style={{flex: 1}}>
            <Stack.Navigator
              initialRouteName="HomeScreen"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="NewsDetailScreen" component={NewsDetail} />
            </Stack.Navigator>
          </SafeAreaView>
        </NavigationContainer>
      </PaperProvider>
    </PersistGate>
  </Provider>
);
