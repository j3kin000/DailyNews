import {Dimensions, StyleSheet} from 'react-native';
import {ITEM_WIDTH} from './carousel-card.component';
import {scaleFont} from '../../utils/utils';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 10,
    width: ITEM_WIDTH,
    height: 300,

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 1,
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  header: {
    color: '#222',
    fontSize: scaleFont(22),
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: scaleFont(18),
    paddingLeft: 20,
    paddingRight: 20,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
  },
  text: {
    color: 'white',
    left: 10,
    fontSize: scaleFont(16),
    fontWeight: '600',
  },
  title: {
    color: 'white',
    left: 10,
    fontSize: scaleFont(18),
    fontWeight: 'bold',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
  },
});
