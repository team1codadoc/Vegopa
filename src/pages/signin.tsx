import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigator = useNavigate();
  const SignInButtonHandler = () => {
    navigator("/withEat/login"); // if 아이디
  };
  return (
    <SignInWrapper>
      <SignInForm>
        <div className="SignInText">회원가입</div>
        <form>
          <Email>
            <div className="EmailText">이메일</div>
            <input placeholder="ex) abcdefgh@email.com" type="email" />
          </Email>
          <Password>
            <div className="PasswordText">비밀번호</div>
            <input minLength={5} type="password" />
          </Password>
          <PasswordConfirm>
            <div className="PasswordConfirmText">비밀번호 재확인</div>
            <input minLength={5} type="password" />
          </PasswordConfirm>
          <NickName>
            <div className="NickNameText">닉네임</div>
            <input minLength={2} type="text" />
          </NickName>
          <AvatarChoose>
            <div className="AvatarChooseText">아바타 선택</div>
            <input type="file" />
          </AvatarChoose>
          <button onClick={SignInButtonHandler}>가입하기</button>
        </form>
      </SignInForm>
    </SignInWrapper>
  );
};

export default SignIn;

const SignInWrapper = styled.div`
width: 100vw;
height: 100vh;
background-color: #c9e164;
display: flex;
justify-content: center;
`;

const SignInForm = styled.div`
width: 500px;
height: 630px;
margin: auto;
background-color: white;
border-radius: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
.SignInText{
  font-size: 30px;
  text-align: center;
  margin-top: 30px;
  color: gray;
  margin-bottom: 50px;
}
form{
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    margin-bottom: 40px;
    height: 30px;
    width: 200px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    transition: all 300ms ease-out;
  }
  input:focus{
    border-bottom: 2px solid #c9e164;
  }
  button{
    font-size: 20px;
    cursor: pointer;
    background-color: #c9e164;
    border-radius: 10px;
    padding: 10px 30px;
    color: gray;
  }
}`;

const Email = styled.div`

`;

const Password = styled.div`
`;

const PasswordConfirm = styled.div`
`;

const NickName = styled.div`
`;

const AvatarChoose = styled.div`
`;
