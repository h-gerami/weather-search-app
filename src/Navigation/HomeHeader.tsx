import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NotificationButton, ProfileButton} from '../common';
import {CCFont, CColor, isPortrait, wp} from '../styles/CustomStyle';
export interface HomeHeaderType {}

const HomeHeader = () => {
  return (
    <View style={[isPortrait() ? styles.container : styles.containerLandscape]}>
      <View>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.userName}>Hipages Code Reviewer</Text>
      </View>
      <View style={styles.profileNotifWrapper}>
        <NotificationButton />
        <ProfileButton style={styles.profileButton} />
      </View>
    </View>
  );
};
export default HomeHeader;
const styles = StyleSheet.create({
  container: {
    height: wp(15),
    backgroundColor: CColor.white,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  containerLandscape: {
    height: wp(5),
    backgroundColor: CColor.white,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  profileButton: {
    marginLeft: 15,
  },
  profileNotifWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcome: {
    fontFamily: CCFont.medium,
    fontSize: 14,
    lineHeight: 14,
    color: CColor.black,
    marginBottom: 1,
  },
  userName: {
    fontFamily: CCFont.regular,
    fontSize: 12,
    lineHeight: 12,
    color: CColor.black,
  },
});
