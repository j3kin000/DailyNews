import {StyleSheet} from 'react-native';
import {height, scaleFont} from '../../utils/utils';

export const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    height: height * 0.5,
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
  publishedAt: {
    color: 'gray',
    marginVertical: 15,
    fontSize: scaleFont(14),
  },
  author: {
    alignSelf: 'center',
    marginVertical: 15,
    color: 'gray',
    fontSize: scaleFont(14),
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: scaleFont(20),
  },
  url: {
    fontSize: scaleFont(16),

    marginLeft: 5,
    color: 'skyblue',
  },
});
