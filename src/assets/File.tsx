import * as React from "react";
import Svg, { Path } from "react-native-svg";
const File = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="bi bi-file-earmark-fill"
    viewBox="0 0 16 16"
    {...props}
  >
    <Path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
  </Svg>
);
export default File;
