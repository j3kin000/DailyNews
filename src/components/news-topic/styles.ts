import {StyleSheet} from 'react-native';
import {scaleFont} from '../../utils/utils';

export const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginTop: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 12,
    fontSize: scaleFont(16),
    textAlign: 'center',
  },
});
