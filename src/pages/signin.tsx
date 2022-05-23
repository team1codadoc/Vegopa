/* eslint-disable no-useless-escape */
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { requestAPI } from "../api/Request";

const SignIn = () => {
  const navigator = useNavigate();
  const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_IMG_NAME}/image/upload`;

  const initialError = {
    email: {
      format: false,
    },
    password: {
      length: false,
      confirm: false,
    },
    username: false,
  };
  const [imgUrl, setImgUrl] = useState("");
  const [emailValid, setEmailValid] = useState({ text: "", valid: false });
  const [email, setEmail] = useState("");
  const [error, setError] = useState(initialError);

  const fileUploadHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "tpyxamup");

    fetch(url, {
      method: "POST",
      body: formData,
    }).then((response) => {
      setImgUrl(response.url);
    });
  };
  const validation = (email: string, password: string, confirmPassword: string, username: string) => {
    setError({
      ...error,
      email: { format: !regEmail.test(email) },
      password: {
        length: password.length < 5,
        confirm: password !== confirmPassword,
      },
      username: Boolean(!username),
    });

    return regEmail.test(email) && password.length > 5 && password === confirmPassword && Boolean(username) && email;
  };

  const signSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from[0].value;
    const password = from[1].value;
    const confirmPassword = from[2].value;
    const username = from[3].value;

    if (validation(email, password, confirmPassword, username)) {
      requestAPI
        .reqSignUp({
          avatar: imgUrl,
          email,
          password,
          username,
        })
        .then((res) => console.log(res));
    }
  };

  const handleEmailValidButton = () => {
    setError({
      ...error,
      email: { format: !regEmail.test(email) },
    });
    if (!regEmail.test(email)) return;
    requestAPI
      .reqEmailValid({ email })
      .then((res) => {
        setEmailValid({ text: res.data.message, valid: true });
      })
      .catch((e) => {
        setEmailValid({ text: e.response.data.message, valid: true });
      });
  };

  const SignInButtonHandler = () => {
    // navigator("/together/login"); // if 아이디
  };
  return (
    <SignInWrapper>
      <SignInForm>
        <div className="SignInText">회원가입</div>
        <form onSubmit={signSubmitHandler}>
          <Email>
            <div className="EmailText">이메일</div>
            <input placeholder="ex) abcdefgh@email.com" type="email" onChange={(e) => setEmail(e.target.value)} />
            <button type="button" onClick={handleEmailValidButton}>
              중복확인
            </button>
            {error.email.format && <span>이메일 형식이 아닙니다.</span>}
            {emailValid.valid && <span>{emailValid.text}</span>}
          </Email>
          <Password>
            <div className="PasswordText">비밀번호</div>
            <input minLength={5} type="password" />
            {error.password.length && <span>비밀번호는 5글자 이상이여야합니다.</span>}
            {error.password.confirm && <span>비밀번호와 재확인 비밀번호를 확인해주십시오</span>}
          </Password>

          <PasswordConfirm>
            <div className="PasswordConfirmText">비밀번호 재확인</div>
            <input minLength={5} type="password" />
            {error.password.confirm && <span>비밀번호와 재확인 비밀번호를 확인해주십시오</span>}
          </PasswordConfirm>
          <NickName>
            <div className="NickNameText">닉네임</div>
            <input minLength={2} type="text" />
            {error.username && <span>유저 이름을 입력해주세요.</span>}
          </NickName>
          <AvatarChoose>
            <div className="AvatarChooseText">아바타 선택</div>
            <input type="file" onChange={fileUploadHandler} />
          </AvatarChoose>
          <button type="submit" onClick={SignInButtonHandler}>
            가입하기
          </button>
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
  .SignInText {
    font-size: 30px;
    text-align: center;
    margin-top: 30px;
    color: gray;
    margin-bottom: 50px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      margin-bottom: 40px;
      height: 30px;
      width: 200px;
      border: none;
      border-bottom: 1px solid black;
      outline: none;
      transition: all 300ms ease-out;
    }
    input:focus {
      border-bottom: 2px solid #c9e164;
    }
    button {
      font-size: 20px;
      cursor: pointer;
      background-color: #c9e164;
      border-radius: 10px;
      padding: 10px 30px;
      color: gray;
    }
  }
`;

const Email = styled.div``;

const Password = styled.div``;

const PasswordConfirm = styled.div``;

const NickName = styled.div``;

const AvatarChoose = styled.div``;
