import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NotificationButton, ProfileButton} from '../common';
import {CCFont, CColor} from '../styles/CustomStyle';
export interface HomeHeaderType {}

const HomeHeader = () => {
  return (
    <View style={styles.container}>
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
    backgroundColor: CColor.white,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 50,
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
