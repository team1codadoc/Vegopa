import React from "react";
import styled from "styled-components";

const Spinner = () => {
  return (
    <Loading>
      <span className="ir">Loading ...</span>
    </Loading>
  );
};

interface Loading {
  size?: string;
  innerColor?: string;
}

const Loading = styled.div<Loading>`
  width: ${(props) => props.size || "3rem"};
  height: ${(props) => props.size || "3rem"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: loading 1.1s infinite linear;
  border-radius: 50%;
  border: 5px solid;
  border-color: ${(props) => props.innerColor || "rgba(193,64,21, 0.2)"};
  border-top-color: ${(props) => props.color || "#c14015"};
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .ir {
    overflow: hidden;
    position: absolute;
    width: 0;
    height: 0;
    line-height: 0;
    text-indent: -9999px;
  }
`;

export default Spinner;
