import React from 'react';
import Svg, { Rect, G, Defs, ClipPath } from 'react-native-svg';

export default function CheckboxEmpty({ height, width }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_1_1311)"></G>
      <Rect x="0.5" y="0.5" width="23" height="23" rx="7.5" stroke="#60626D" />
      <Defs>
        <ClipPath id="clip0_1_1311">
          <Rect width="24" height="24" rx="8" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
