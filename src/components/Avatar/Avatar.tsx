import React from "react";
import styled from "styled-components";
type props = {
  name: string;
  size: "L" | "S";
};

function Avatar({ size, name }: props) {
  return (
    <AvatarWrapper size={size}>
      <Profile />
      <p>{name}</p>
    </AvatarWrapper>
  );
}

export default Avatar;

const AvatarWrapper = styled.div<{ size: "L" | "S" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  > div {
    height: ${({ size }) => (size === "L" ? "24px" : "18px")};
    width: ${({ size }) => (size === "L" ? "24px" : "18px")};
  }
  p {
    margin-left: 8px;
    font-size: ${({ size }) => (size === "L" ? "18px" : "12px")};
  }
`;

const Profile = styled.div`
  background-color: #d9d9d9;
  border-radius: 50%;
`;
