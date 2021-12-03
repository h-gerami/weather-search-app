import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {set_orientation} from '../../Redux/Actions';
import {orientationEnum} from '../../Redux/Reducers/WeatherReducer';
import {CCFont, CColor, isPortrait} from '../../styles/CustomStyle';
const City = (props: {set_orientation: (orientation: string) => void}) => {
  const {set_orientation} = props;
  Dimensions.addEventListener('change', () => {
    set_orientation(
      isPortrait() ? orientationEnum.portrait : orientationEnum.landscape,
    );
  });
  return (
    <View style={styles.container}>
      <Text style={styles.pageName}>My favorite Cities :)</Text>
    </View>
  );
};
// Redux
const mapDispatchToProps = {
  set_orientation,
};
export default connect(null, mapDispatchToProps)(City);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageName: {
    fontFamily: CCFont.medium,
    fontSize: 15,
    color: CColor.black,
  },
});
