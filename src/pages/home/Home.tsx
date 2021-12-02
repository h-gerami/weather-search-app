import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {
  CloadLoading,
  InfoImage,
  LazyLoadImage,
  WeatherList,
} from '../../common';
import {set_weather, set_err} from '../../Redux/Actions';
import {CColor, isPortrait} from '../../styles/CustomStyle';
import {WeatherType} from '../../Types/types';
import ListHeader from './ListHeader';

export interface HomePageType {
  weather: WeatherType;
  loading: boolean;
  err: string;
  set_weather: (cityName: string) => void;
  set_err: (err: string) => void;
}

function Home(props: HomePageType) {
  const {weather, loading, err, set_weather, set_err} = props;
  const [city, setCity] = useState<string>('');
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
        {flexDirection: isPortrait() || !hasWeather ? 'column' : 'row'},
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
        <View style={styles.listWrapper}>
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
        !loading && <InfoImage />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: isPortrait() ? 15 : 50,
    backgroundColor: CColor.bgColor,
    paddingBottom: 80,
  },
  header: {
    flex: 0,
  },
  listWrapper: {
    flex: 1,
    marginLeft: isPortrait() ? 0 : 15,
  },
});
// Redux
const mapStateToProps = (state: {
  WeatherReducer: {
    weather: WeatherType;
    loading: boolean;
    err: string;
  };
}) => {
  const {weather, loading, err} = state.WeatherReducer;
  return {
    weather,
    loading,
    err,
  };
};
const mapDispatchToProps = {
  set_weather,
  set_err,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
