import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { requestAPI } from "../api/Request";
import { tokenStorage } from "../store/token";

const Login = () => {
  const navigator = useNavigate();

  const [emailState, setEmail] = useState("");
  const [passwordState, setPassword] = useState("");

  const SignInButtonHandler = () => {
    navigator("/together/signin");
  };

  const LogInHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const body = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    const result = await requestAPI.reqLogIn(body);
    tokenStorage.setAuthToken(result.data.user.token);
    navigator("/together");
  };

  function validation(email: string, password: string) {
    const len = email.length;
    const passwordLen = password.length;

    return len > 3 && passwordLen > 3;
  }

  return (
    <LoginWrapper>
      <LoginForm>
        <LoginHeader>로그인</LoginHeader>
        <LoginMain>
          <form onSubmit={LogInHandler}>
            <div className="wrapper">
              <input onChange={(e) => setEmail(e.target.value)} placeholder="아이디" type="text" name="userName" />
            </div>
            <div className="wrapper">
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                type="password"
                name="password"
              />
            </div>
            <button disabled={!validation(emailState, passwordState)} type="submit" className="login-button">
              로그인
            </button>
          </form>
          <SignInText>아직 회원이 아니신가요?</SignInText>
          <SignInState onClick={SignInButtonHandler}>회원가입</SignInState>
        </LoginMain>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c9e164;
`;

const HomeButton = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.LIGHT_GREY};
  text-align: center;
  top: 15%;
  cursor: pointer;
`;
const LoginForm = styled.div`
  margin: auto;
  width: 500px;
  height: 500px;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const LoginHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid black;
  padding: 20px 0;
  font-size: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: gray;
`;

const SignInState = styled.div`
  text-align: center;
  height: auto;
  color: #b1b1b1;
  font-size: 20px;
  cursor: pointer;
`;

const SignInText = styled.div`
  color: #b1b1b1;
  text-align: center;
  margin-bottom: 30px;
  font-size: 14px;
`;

const LoginMain = styled.div`
  box-sizing: content-box;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 30px 40px;
    margin-bottom: 30px;
    .wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      height: 40px;
      margin-bottom: 32px;
    }
    input {
      width: 100%;
      height: 40px;
      font-size: 16px;
      margin-left: 10px;
      outline: none;
      border: none;
      transition: all 300ms ease-in;
    }
    input:focus {
      border-bottom: 2px solid #c9e164;
    }
    button {
      background-color: #c9e164;
      width: 100%;
      height: 40px;
      cursor: pointer;
      font-size: 20px;
      border-radius: 10px;
      transition: color 300ms ease-in-out;
      &:disabled {
        background-color: ${({ theme }) => theme.colors.LIGHT_GREY};
      }
    }
  }
`;
