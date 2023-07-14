import {StyleSheet} from 'react-native';
import {height, isIos, scaleFont} from '../../utils/utils';

export const styles = StyleSheet.create({
  searchButton: {
    marginVertical: 20,
    paddingVertical: 5,
    minHeight: 40,
    width: '80%',
    textAlign: 'center',
  },
  image: {
    borderRadius: 30,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginVertical: 20,
    fontSize: scaleFont(25),
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  text: {
    fontSize: scaleFont(18),
    color: 'gray',
    textAlign: 'center',
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: scaleFont(18),
    alignSelf: 'center',
    verticalAlign: 'middle',
  },
  imageContainer: {
    borderRadius: 30,
    height: isIos ? height * 0.7 : height * 0.6,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 0.65,
    elevation: 1,
  },
});
