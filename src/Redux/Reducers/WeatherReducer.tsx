import {Dimensions} from 'react-native';
import {WeatherType} from '../../Types/types';
import {
  SET_ERR,
  SET_IS_LOADING,
  SET_ORIENTATION,
  SET_WEATHER,
} from '../Actions/types';

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

export interface CurrencyReducerInitType {
  loading: boolean;
  err: string;
  weather: WeatherType | {};
  orientation: string | undefined;
}
export enum orientationEnum {
  portrait = 'portrait',
  landscape = 'landscape',
}
const INITIAL_STATE: CurrencyReducerInitType = {
  loading: false,
  weather: {},
  err: '',
  orientation: isPortrait()
    ? orientationEnum.portrait
    : orientationEnum.landscape,
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_ERR:
      return {...state, err: action.payload};
    case SET_ORIENTATION:
      return {...state, orientation: action.payload};
    case SET_WEATHER:
      return {...state, weather: action.payload};
    case SET_IS_LOADING:
      return {...state, loading: action.payload};
    default:
      return state;
  }
};
