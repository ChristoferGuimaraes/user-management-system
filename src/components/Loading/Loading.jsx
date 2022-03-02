import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 100px;
  border-color: #8e2de2;
`;

function LoadingComponent() {

  return (
    <div className="sweet-loading">
      <PulseLoader color="#8e2de2" css={override} size={15} />
    </div>
  );
}

export default LoadingComponent;