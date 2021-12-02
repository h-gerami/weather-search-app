import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CColor} from '../../styles/CustomStyle';
const NotificationButton = () => {
  return (
    <TouchableOpacity style={[styles.container]}>
      <View style={styles.iconContainer}>
        <Icon name="bell-outline" size={15} color={CColor.gray} />
      </View>
      <View style={styles.dot} />
    </TouchableOpacity>
  );
};
export {NotificationButton};
const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    backgroundColor: CColor.lightGray,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dot: {
    width: 13,
    height: 13,
    borderRadius: 100,
    backgroundColor: CColor.black,
    position: 'absolute',
    right: -1,
    top: -1,
    borderWidth: 2,
    borderColor: CColor.white,
  },
});
