import {NETWORK_ERROR} from '../../global/Errors';
import services from '../../global/Services';
import {SET_ERR, SET_IS_LOADING, SET_WEATHER} from './types';

export const set_is_loading = (loading: boolean) => {
  return {
    type: SET_IS_LOADING,
    payload: loading,
  };
};
export const set_err = (err: string) => {
  return {
    type: SET_ERR,
    payload: err,
  };
};

export const set_weather = (cityName: string) => {
  return (dispatch: (value: any) => void) => {
    dispatch(set_is_loading(true));
    dispatch({
      type: SET_WEATHER,
      payload: {},
    });
    services
      .GetWeather(cityName)
      .then(res => {
        console.log(res, 'resss');

        const error = res?.error;
        if (error) {
          dispatch({
            type: SET_ERR,
            payload: error.message,
          });
        } else {
          if (res) {
            dispatch({
              type: SET_WEATHER,
              payload: res,
            });
          } else {
            dispatch({
              type: SET_ERR,
              payload: NETWORK_ERROR,
            });
          }
        }
        dispatch(set_is_loading(false));
      })
      .catch(err => {
        console.log(err, 'err');
        dispatch(set_is_loading(false));
      });
  };
};
