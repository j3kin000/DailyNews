import {StyleSheet} from 'react-native';
import {scaleFont} from '../../utils/utils';

export const styles = StyleSheet.create({
  searchbarContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbar: {
    paddingLeft: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchbarTextInput: {
    flex: 1,
    fontSize: scaleFont(16),
    marginLeft: 10,
    minHeight: 40,
  },
  searchIcon: {marginLeft: 1},
  searchButton: {minHeight: 40},
  text: {
    fontSize: scaleFont(16),
  },
});
