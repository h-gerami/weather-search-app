import React, {useEffect, useState} from 'react';
import {Alert, Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {CloadLoading, InfoImage, WeatherList} from '../../common';
import {set_weather, set_err, set_orientation} from '../../Redux/Actions';
import {orientationEnum} from '../../Redux/Reducers/WeatherReducer';
import {CColor, isPortrait} from '../../styles/CustomStyle';
import {WeatherType} from '../../Types/types';
import ListHeader from './ListHeader';

export interface HomePageType {
  weather: WeatherType;
  loading: boolean;
  err: string;
  set_weather: (cityName: string) => void;
  set_err: (err: string) => void;
  orientation: string;
  set_orientation: (orientation: string) => void;
}

function Home(props: HomePageType) {
  const {
    weather,
    loading,
    err,
    set_weather,
    set_err,
    set_orientation,
    orientation,
  } = props;
  const [city, setCity] = useState<string>('');

  Dimensions.addEventListener('change', () => {
    set_orientation(
      isPortrait() ? orientationEnum.portrait : orientationEnum.landscape,
    );
  });

  const hasWeather =
    weather?.forecast?.forecastday &&
    weather?.forecast?.forecastday?.length > 0;
  const searchWeatherHandler = (cityName: string) => {
    setCity(cityName);
    set_weather(cityName);
  };
  useEffect(() => {
    if (err) {
      Alert.alert('Error', err, [
        {
          text: 'OK',
          onPress: () => set_err(''),
          style: 'cancel',
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [err]);
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection:
            orientation === orientationEnum.portrait || !hasWeather
              ? 'column'
              : 'row',
          paddingHorizontal: 15,
        },
      ]}>
      <View>
        <ListHeader
          searchForCity={(cityName: string) => searchWeatherHandler(cityName)}
          location={weather?.location}
          currentWeather={weather?.current}
        />
        {loading && <CloadLoading />}
      </View>
      {hasWeather ? (
        <View
          style={[
            styles.listWrapper,
            {marginLeft: orientation === orientationEnum.portrait ? 0 : 15},
          ]}>
          <FlatList
            refreshing={loading}
            onRefresh={() => searchWeatherHandler(city)}
            showsVerticalScrollIndicator={false}
            data={
              weather?.forecast?.forecastday &&
              weather?.forecast?.forecastday?.length > 0
                ? weather.forecast.forecastday
                : []
            }
            renderItem={({item}) => {
              return <WeatherList dayData={item} />;
            }}
          />
        </View>
      ) : (
        !loading && (
          <InfoImage isPortrait={orientation === orientationEnum.portrait} />
        )
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,

    backgroundColor: CColor.bgColor,
    paddingBottom: 80,
  },
  header: {
    flex: 0,
  },
  listWrapper: {
    flex: 1,
  },
});
// Redux
const mapStateToProps = (state: {
  WeatherReducer: {
    weather: WeatherType;
    loading: boolean;
    err: string;
    orientation: string;
  };
}) => {
  const {weather, loading, err, orientation} = state.WeatherReducer;
  return {
    weather,
    loading,
    err,
    orientation,
  };
};
const mapDispatchToProps = {
  set_weather,
  set_err,
  set_orientation,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
