import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {CColor} from '../styles/CustomStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {orientationEnum} from '../Redux/Reducers/WeatherReducer';

const MyTabBar = (props: {
  state: any;
  descriptors: any;
  navigation: any;
  orientation: string;
}) => {
  const {state, descriptors, navigation, orientation} = props;

  const icoSize = orientation === orientationEnum.portrait ? 25 : 25;
  return (
    <View
      style={[
        orientation === orientationEnum.portrait
          ? styles.container
          : styles.containerLandscape,
      ]}>
      <Image
        style={[
          orientation === orientationEnum.portrait
            ? styles.tabbarImg
            : styles.tabbarImgLandscape,
        ]}
        source={require('../../assets/images/tabbar.png')}
      />
      {state.routes.map(
        (route: {key: string | number; name: any}, index: any) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return label !== 'Home' ? (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                orientation === orientationEnum.portrait
                  ? styles.iconButtonWrapper
                  : styles.iconButtonWrapperLandscape,
              ]}>
              {label === 'Overview' && (
                <Icon
                  name="view-grid-outline"
                  size={icoSize}
                  color={isFocused ? CColor.black : CColor.gray}
                />
              )}
              {label === 'City' && (
                <Icon
                  name="city"
                  size={icoSize}
                  color={isFocused ? CColor.black : CColor.gray}
                />
              )}
              {label === 'Statistics' && (
                <Icon
                  name="chart-areaspline"
                  size={icoSize}
                  color={isFocused ? CColor.black : CColor.gray}
                />
              )}
              {label === 'Setting' && (
                <Icon
                  name="cog-outline"
                  size={icoSize}
                  color={isFocused ? CColor.black : CColor.gray}
                />
              )}
            </TouchableOpacity>
          ) : (
            <View key={label} style={styles.centerButtonWrapperContainer}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={[
                  orientation === orientationEnum.portrait
                    ? styles.centerButtonWrapper
                    : styles.centerButtonWrapperLandscape,
                ]}>
                <Image
                  style={[
                    orientation === orientationEnum.portrait
                      ? styles.centerImg
                      : styles.centerImgLandscape,
                  ]}
                  source={require('../../assets/images/homeButton.png')}
                />
              </TouchableOpacity>
            </View>
          );
        },
      )}
    </View>
  );
};

// Redux
const mapStateToProps = (state: {
  WeatherReducer: {
    orientation: string;
  };
}) => {
  const {orientation} = state.WeatherReducer;
  return {
    orientation,
  };
};
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(MyTabBar);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 90,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  containerLandscape: {
    flexDirection: 'row',
    height: 90,
    position: 'absolute',
    bottom: 0,
    width: 340,
    alignSelf: 'center',
  },
  tabbarImg: {
    width: '100%',
    height: 90,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -5,
  },
  tabbarImgLandscape: {
    width: 340,
    height: 90,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -15,
  },
  iconButtonWrapper: {
    flex: 1,
    // backgroundColor: 'red',
    margin: 10,
    height: 50,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonWrapperLandscape: {
    flex: 1,
    // backgroundColor: 'red',
    margin: 3,
    height: 50,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImg: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
  centerImgLandscape: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },

  centerButtonWrapperContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButtonWrapper: {
    position: 'absolute',
    bottom: 25,
  },
  centerButtonWrapperLandscape: {
    position: 'absolute',
    bottom: 15,
  },
});
