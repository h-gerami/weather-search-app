// import {set_is_loading} from '../src/Redux/Actions';
import {set_is_loading} from '../src/Redux/Actions';
import reducer, {
  orientationEnum,
  WeatherReducerInitType,
} from '../src/Redux/Reducers/WeatherReducer';
import {isPortrait} from '../src/styles/CustomStyle';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    loading: false,
    err: '',
    weather: {},
    orientation: isPortrait()
      ? orientationEnum.portrait
      : orientationEnum.landscape,
  });
});

test('should handle loading state be false', () => {
  const previousState: WeatherReducerInitType = {
    loading: false,
    err: 'test error',
    weather: {},
    orientation: isPortrait()
      ? orientationEnum.portrait
      : orientationEnum.landscape,
  };
  expect(reducer(previousState, set_is_loading(false))).toEqual({
    loading: false,
    err: 'test error',
    weather: {},
    orientation: isPortrait()
      ? orientationEnum.portrait
      : orientationEnum.landscape,
  });
});
