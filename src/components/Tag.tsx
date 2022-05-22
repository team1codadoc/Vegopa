import React from "react";
import styled from "styled-components";
type props = {
  children: React.ReactNode;
};
function Tag({ children }: props) {
  return <TagWrapper>{children}</TagWrapper>;
}

export default Tag;

const TagWrapper = styled.div`
  background-color: rgba(151, 114, 251, 0.5);
  color: #fff;
  padding: 5px 10px;
  font-weight: 700;
  font-size: 12px;
  border-radius: 20px;
  width: fit-content;
`;
