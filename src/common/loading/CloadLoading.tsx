import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
const CloadLoading = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/loading2.gif')}
        style={styles.img}
      />
    </View>
  );
};
export {CloadLoading};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
