import {WeatherType} from '../../Types/types';
import {SET_ERR, SET_IS_LOADING, SET_WEATHER} from '../Actions/types';
export interface CurrencyReducerInitType {
  loading: boolean;
  err: string;
  weather: WeatherType | {};
}

const INITIAL_STATE: CurrencyReducerInitType = {
  loading: false,
  weather: {},
  err: '',
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_ERR:
      return {...state, err: action.payload};
    case SET_WEATHER:
      return {...state, weather: action.payload};
    case SET_IS_LOADING:
      return {...state, loading: action.payload};
    default:
      return state;
  }
};
