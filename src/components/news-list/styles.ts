import {StyleSheet} from 'react-native';
import {scale, scaleFont} from '../../utils/utils';

export const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 0.5,
    borderRadius: 10,
    width: 120,
    height: 120,
  },
  newsListContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  header: {
    marginHorizontal: 10,
    flex: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: scaleFont(16),
    marginTop: 10,
  },
  recommendationText: {
    fontWeight: 'bold',
    fontSize: scaleFont(18),
    paddingLeft: 5,
  },
  recommendationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
