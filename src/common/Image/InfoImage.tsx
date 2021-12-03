import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {CCFont, CColor} from '../../styles/CustomStyle';
const InfoImage = (props: {isPortrait: boolean}) => {
  const {isPortrait} = props;
  return (
    <View
      style={{
        flexDirection: isPortrait ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
      }}>
      <Image
        style={styles.img}
        source={require('../../../assets/images/cload.png')}
      />
      <Text style={styles.text}>
        Please Enter your City Name and then Click the Search Button
      </Text>
      <Image
        style={styles.img}
        source={require('../../../assets/images/sun.png')}
      />
    </View>
  );
};
export {InfoImage};
const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: CCFont.medium,
    color: CColor.black,
    fontSize: 15,
    textAlign: 'center',
    margin: 20,
    lineHeight: 20,
  },
});
