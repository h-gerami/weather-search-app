import React from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import {CColor, CCFont} from '../../styles/CustomStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export interface SearchInputType {
  placeHolder: string;
  style?: object;
  error?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  onChangeText: (value: string) => void;
  value: string;
  onPress: () => void;
}
const SearchInput = (props: SearchInputType) => {
  const {
    placeHolder,
    value,
    onChangeText,
    onPress,
    style,
    error,
    onBlur,
    onFocus,
  } = props;

  return (
    <View style={[styles.container, style, error && {borderColor: CColor.red}]}>
      <TextInput
        onBlur={onBlur}
        onFocus={onFocus}
        style={[styles.textInput]}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={CColor.gray}
        placeholder={placeHolder}
        keyboardType={'default'}
        underlineColorAndroid={'transparent'}
      />
      <TouchableOpacity style={styles.searchButton} onPress={onPress}>
        <Icon name={'magnify'} size={20} color={CColor.bgColor} />
      </TouchableOpacity>
    </View>
  );
};
export {SearchInput};
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    height: 50,
    borderWidth: 0.5,
    borderColor: CColor.lightGray,
    backgroundColor: CColor.lightGray,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: CColor.black,
    width: 50,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontFamily: CCFont.medium,
    color: CColor.black,
    fontSize: 15,
    flex: 1,
    marginLeft: 2,
    textDecorationColor: 'transparent',
  },
});
