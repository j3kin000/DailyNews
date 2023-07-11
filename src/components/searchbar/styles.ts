import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchbarContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbar: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchbarTextInput: {
    flex: 1,
    fontSize: 14,
    marginLeft: 10,
    minHeight: 40,
  },
  searchIcon: {marginLeft: 1},
  searchButton: {minHeight: 40},
});
