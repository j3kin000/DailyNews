import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 912;
const guidelineBaseHeight = 1368;

//const initial = Orientation.getInitialOrientation();
export const {width, height} = Dimensions.get('window');
export const {fontScale, scale} = Dimensions.get('screen');

export const scaleFont = (fontSize: number) => {
  const scaledFontScale = fontScale > 1 ? 1 + 1 * 0.1 : 1;
  return (
    (PixelRatio.getPixelSizeForLayoutSize(fontSize) * scaledFontScale) / scale
  );
};

export const fixedFont = (fontSize: number) => {
  // unaffected by phone font setting
  const setScale = fontScale > 1 ? 0.8 : 1;
  return (PixelRatio.getPixelSizeForLayoutSize(fontSize) * setScale) / scale;
};

export const horizontalScale = (size: number) =>
  Math.round((width / guidelineBaseWidth) * size);

export const verticalScale = (size: number) =>
  Math.round((height / guidelineBaseHeight) * size);

export const isIos = Platform.OS === 'ios';
