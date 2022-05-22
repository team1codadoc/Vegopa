import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Icon } from "../asset/icon/retry.svg";
function RetryButton() {
  return (
    <Link to="/">
      <AgainWrapper>
        <AgainButton>
          <Icon></Icon>
        </AgainButton>
        <AgainText>다시하기</AgainText>
      </AgainWrapper>
    </Link>
  );
}

export default RetryButton;

const AgainWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  margin-bottom: 20px;
`;

const AgainButton = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
  margin-right: 7px;
`;

const AgainText = styled.div`
  font-size: 25px;
  padding-top: 5px;
`;
