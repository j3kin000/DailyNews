import {StyleSheet} from 'react-native';
import {scaleFont} from '../utils';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContainer: {flex: 1, margin: 10},
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  rowDirectionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  headerTitleTextBold: {
    fontSize: scaleFont(20),
    fontWeight: 'bold',
  },
  headerTitleTextNormal: {
    fontSize: scaleFont(20),
  },
  normalText: {
    fontSize: scaleFont(16),
  },
});
