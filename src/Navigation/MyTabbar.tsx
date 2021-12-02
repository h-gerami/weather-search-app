import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {CColor, isPortrait, wp} from '../styles/CustomStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function MyTabBar({state, descriptors, navigation}: any) {
  const icoSize = isPortrait() ? wp(6) : wp(2.5);
  return (
    <View style={[isPortrait() ? styles.container : styles.containerLandscape]}>
      <Image
        style={[isPortrait() ? styles.tabbarImg : styles.tabbarImgLandscape]}
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
                isPortrait()
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
                  isPortrait()
                    ? styles.centerButtonWrapper
                    : styles.centerButtonWrapperLandscape,
                ]}>
                <Image
                  style={[
                    isPortrait() ? styles.centerImg : styles.centerImgLandscape,
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
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: wp(22),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  containerLandscape: {
    flexDirection: 'row',
    height: wp(7),
    position: 'absolute',
    bottom: 0,
    left: wp(30),
    right: 0,
    width: wp(40),
  },
  tabbarImg: {
    width: wp(100),
    height: wp(22),
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -wp(2),
  },
  tabbarImgLandscape: {
    width: wp(40),
    height: wp(11),
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -wp(2),
  },
  iconButtonWrapper: {
    flex: 1,
    // backgroundColor: 'red',
    margin: wp(2),
    height: wp(13),
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonWrapperLandscape: {
    flex: 1,
    // backgroundColor: 'red',
    margin: wp(1),
    height: wp(6),
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerImg: {
    height: wp(17),
    width: wp(17),
    resizeMode: 'contain',
  },
  centerImgLandscape: {
    height: wp(7),
    width: wp(7),
    resizeMode: 'contain',
  },

  centerButtonWrapperContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButtonWrapper: {
    position: 'absolute',
    bottom: wp(6),
  },
  centerButtonWrapperLandscape: {
    position: 'absolute',
    bottom: wp(2),
  },
});
