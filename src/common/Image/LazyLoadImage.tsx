import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';
import {CColor} from '../../styles/CustomStyle';
interface LazyLoadImageType {
  width: number;
  height: number;
  imgUri: string;
}
const LazyLoadImage = (props: LazyLoadImageType) => {
  const {width, height, imgUri} = props;
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <React.Fragment>
      {loading && <ActivityIndicator size={'small'} color={CColor.blue} />}
      <FastImage
        onLoadEnd={() => {
          setLoading(false);
        }}
        style={{
          width: width,
          height: height,
        }}
        source={{
          uri: imgUri,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </React.Fragment>
  );
};

export {LazyLoadImage};
