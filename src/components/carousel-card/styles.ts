import {Dimensions, StyleSheet} from 'react-native';
import {ITEM_WIDTH} from './carousel-card.component';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 10,
    width: ITEM_WIDTH,
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
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: '#222',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
