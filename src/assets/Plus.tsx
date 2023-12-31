import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Plus = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    color={props.color}
    className="bi bi-plus"
    viewBox="0 0 16 16"
    {...props}>
    <Path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
  </Svg>
);
export default Plus;
