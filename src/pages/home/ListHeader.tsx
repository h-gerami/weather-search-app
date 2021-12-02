import moment from 'moment';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {LazyLoadImage, SearchInput} from '../../common';
import {EMPTY_FIELD} from '../../global/Errors';
import {CCFont, CColor} from '../../styles/CustomStyle';
import {CurrentType, LocationType} from '../../Types/types';
interface ListHeaderType {
  searchForCity: (cityName: string) => void;
  location: LocationType;
  currentWeather: CurrentType;
}
const ListHeader = (props: ListHeaderType) => {
  const {searchForCity, location, currentWeather} = props;
  const [city, setCity] = useState<string>('');
  const onSearchClickHandler = () => {
    if (city) {
      searchForCity(city);
    } else {
      Alert.alert('Error', EMPTY_FIELD, [
        {
          text: 'OK',
          //   onPress: () => set_err(''),
          style: 'cancel',
        },
      ]);
    }
  };
  return (
    <View>
      <SearchInput
        placeHolder={'Enter your City Name'}
        onChangeText={setCity}
        value={city}
        onPress={onSearchClickHandler}
      />
      {/* {location && (
        <View style={styles.locationWrapper}>
          <Text
            style={[
              styles.text1,
              {fontFamily: CCFont.bold, fontSize: 15, marginBottom: 10},
            ]}>
            City: {location.name}
          </Text>
          <Text style={styles.text1}>Country: {location.country}</Text>
          <Text style={styles.text1}>Region: {location.region}</Text>
        </View>
      )} */}
      {currentWeather && (
        <View style={styles.currentWrapper}>
          <View>
            <Text
              style={[
                styles.text1,
                {fontFamily: CCFont.bold, fontSize: 15, marginBottom: 10},
              ]}>
              {currentWeather.condition.text}
            </Text>
            <Text style={styles.text1}>
              Temprature: {currentWeather.temp_c} c
            </Text>
            <Text style={styles.text1}>
              Wind Speed: {currentWeather.wind_kph} kph
            </Text>
            <Text style={styles.text1}>
              Last Update:
              {' ' +
                moment
                  .unix(currentWeather.last_updated_epoch)
                  .format('dddd MMM Do | h:mm a')}
            </Text>
          </View>
          <LazyLoadImage
            width={90}
            height={90}
            imgUri={
              'https://' + currentWeather.condition.icon.replace('//', '')
            }
          />
        </View>
      )}
    </View>
  );
};
export default ListHeader;
const styles = StyleSheet.create({
  locationWrapper: {
    marginTop: 10,
    backgroundColor: CColor.white,
    borderRadius: 5,
    padding: 10,
  },
  currentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: CColor.white,
    borderRadius: 5,
    padding: 10,
  },
  text1: {
    fontFamily: CCFont.medium,
    fontSize: 14,
    color: CColor.black,
    lineHeight: 17,
  },
});
