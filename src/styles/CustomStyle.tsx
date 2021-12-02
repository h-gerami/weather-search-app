import {Dimensions} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
export function hp(percentage: number) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}
export const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};
const CColor = {
  black: '#1C3041',
  gray: '#959595',
  blue: '#5AA9E6',
  red: 'red',
  white: '#fff',
  bgColor: '#ededed',
  lightGray: '#E5E5E5',
};
const CCFont = {
  light: 'SofiaProLight',
  medium: 'SofiaProMedium',
  bold: 'SofiaProBold',
  regular: 'SofiaProRegular',
};

export {CCFont, CColor};
