import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import images from '../themes/images';

export type IImageViewScreenProps = {};

const screenWidth = Dimensions.get('screen').width;

export const ImageViewScreen = (props: any) => {
  const {id} = props.route.params;
  const displayImage = images[id];
  return (
    <View>
      <Image
        style={{resizeMode: 'contain', width: screenWidth}}
        source={displayImage}
      />
    </View>
  );
};
