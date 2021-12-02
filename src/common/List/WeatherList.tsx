import moment from 'moment';
import React, {useRef} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LazyLoadImage} from '..';
import {CCFont, CColor, isPortrait} from '../../styles/CustomStyle';
import {ForecastdayType} from '../../Types/types';
import CardFlip from 'react-native-card-flip';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface WeatherListType {
  dayData: ForecastdayType;
}
const WeatherList = (props: WeatherListType) => {
  const {dayData} = props;
  const cardRef = useRef() as React.MutableRefObject<CardFlip>;
  const onFlipCardClickHandler = () => {
    cardRef.current.flip();
  };
  return (
    <CardFlip style={styles.cardWrapper} ref={cardRef}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>
              {moment.unix(dayData.date_epoch).format('dddd MMM Do')}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={onFlipCardClickHandler}>
            <Text style={styles.detailsText}>Details</Text>
            <Icon
              name="axis-z-rotate-counterclockwise"
              size={20}
              color={CColor.white}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
            }}>
            <LazyLoadImage
              width={60}
              height={60}
              imgUri={'https://' + dayData.day.condition.icon.replace('//', '')}
            />

            <Text
              style={[
                styles.conditionText,
                {fontFamily: CCFont.bold, marginLeft: 10},
              ]}>
              {dayData.day.condition.text}
            </Text>
          </View>
          <View style={styles.tempWrapper}>
            <Image
              style={styles.tempImg}
              source={require('../../../assets/images/temp.jpg')}
            />
            <View style={{paddingLeft: 10}}>
              <Text style={styles.conditionText}>
                Average: {dayData.day.avgtemp_c} c
              </Text>
              <Text style={styles.conditionText}>
                Max: {dayData.day.maxtemp_c} c
              </Text>
              <Text style={styles.conditionText}>
                Min: {dayData.day.mintemp_c} c
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>
              {moment.unix(dayData.date_epoch).format('dddd MMM Do')}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={onFlipCardClickHandler}>
            <Text style={styles.detailsText}>Details</Text>
            <Icon
              name="axis-z-rotate-counterclockwise"
              size={20}
              color={CColor.white}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <View style={styles.grid3}>
            <Icon name="weather-sunset-up" size={50} color={CColor.black} />
            <Text style={styles.conditionText}>{dayData.astro.sunrise}</Text>
          </View>
          <View style={styles.grid3}>
            <Icon name="weather-sunset" size={50} color={CColor.black} />
            <Text style={styles.conditionText}>{dayData.astro.sunset}</Text>
          </View>
          <View style={styles.grid3}>
            <Icon name="moon-waning-crescent" size={50} color={CColor.black} />
            <Text style={styles.conditionText}>{dayData.astro.moonset}</Text>
          </View>
        </View>
      </View>
    </CardFlip>
  );
};
export {WeatherList};
const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    overflow: 'hidden',
    borderRadius: 10,
    borderColor: CColor.lightGray,
    backgroundColor: CColor.white,
    height: 150,
    // width: isPortrait() ? '100%' : 300,
  },
  tempDetails: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  cardWrapper: {
    marginBottom: 10,
    height: 150,
    alignSelf: 'stretch',
  },
  tempWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    padding: 15,
    flex: 1,
    flexDirection: 'row',
  },
  grid3: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    height: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextWrapper: {
    backgroundColor: CColor.blue,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  iconWrapper: {
    width: 100,
    backgroundColor: CColor.black,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  detailsText: {
    color: CColor.white,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: CCFont.medium,
  },
  headerText: {
    color: CColor.black,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: CCFont.bold,
  },
  conditionText: {
    color: CColor.black,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: CCFont.medium,
    marginTop: 5,
  },
  tempImg: {
    width: 40,
    height: 60,
    resizeMode: 'contain',
  },
});
