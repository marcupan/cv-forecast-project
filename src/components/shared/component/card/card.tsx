import React, {useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';

import {animationDuration, animationPerspective} from 'api/forecast/const';
import {CardProps} from 'components/shared/interface/card.interface';

import {CardStyles} from './card.styles';

const CardComponent = ({renderFront, renderBack}: CardProps) => {
  const [isFront, setIsFront] = useState(true);

  const opacity = useRef(new Animated.Value(0)).current;

  const rotateY = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const frontOpacity = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const backSideStyles = [
    CardStyles.side,
    {
      transform: [{rotateY: '180deg'}, {rotateY}],
      zIndex: isFront ? 0 : 1,
      perspective: animationPerspective,
      opacity,
    },
  ];
  const frontSideStyles = [
    CardStyles.side,
    {
      transform: [{rotateY}],
      opacity: frontOpacity,
      perspective: animationPerspective,
    },
  ];

  const handleFlip = () => {
    Animated.timing(opacity, {
      toValue: isFront ? 1 : 0,
      easing: Easing.cubic,
      useNativeDriver: true,
      duration: animationDuration,
    }).start();
    setIsFront(!isFront);
  };

  return (
    <Animated.View style={CardStyles.root}>
      <Animated.View style={backSideStyles}>
        {renderBack({onFlip: handleFlip})}
      </Animated.View>
      <Animated.View style={frontSideStyles}>
        {renderFront({onFlip: handleFlip})}
      </Animated.View>
    </Animated.View>
  );
};

export const Card = React.memo(CardComponent) as typeof CardComponent;
