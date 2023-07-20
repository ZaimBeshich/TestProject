import React from 'react';
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

export default function ArrowLeft({ height, width }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <G clip-path='url(#clip0_1_1254)'>
        <Path
          d='M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z'
          fill='#1E1E20'
        />
      </G>
      <Defs>
        <ClipPath id='clip0_1_1254'>
          <Rect width='24' height='24' fill='white' />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
