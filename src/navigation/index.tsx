import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/home.screen';
import NewsDetailScreen from '../screens/news-detail/news-detail.screen';
import {Animated, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from '../store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {NewsTypeProps} from '../store/news/news.type';
import {FC} from 'react';
import {NavigationType} from '../components/news-list/news-list.component';
import SplashScreen from '../screens/splash/splash.screen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#dddddd',
    secondary: '#FFA500',
  },
};
export type RootStackParamList = {
  SplashScreen: undefined;
  HomeScreen: undefined;
  NewsDetailScreen: {newsItem: NewsTypeProps};
};

export type StackNavigatorProps = {
  navigation: NavigationType;
};
const Stack = createStackNavigator<RootStackParamList>();
const av = new Animated.Value(0);
av.addListener(() => {
  return;
});
const Navigation: FC<StackNavigatorProps> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen
                name="NewsDetailScreen"
                component={NewsDetailScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};
export default Navigation;
