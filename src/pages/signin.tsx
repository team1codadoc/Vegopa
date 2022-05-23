/* eslint-disable no-useless-escape */
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { requestAPI } from "../api/Request";
import { FaDAndD } from "react-icons/fa";

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
  const [username, setUsername] = useState("");
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
        length: password.length <= 5,
        confirm: password !== confirmPassword,
      },
      username: Boolean(!username),
    });

    return regEmail.test(email) && password.length >= 5 && password === confirmPassword && Boolean(username) && email;
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

  const handleUserNameValidButton = () => {
    requestAPI
      .reqUserNameValid({ username })
      .then((res) => {
        console.log({ text: res.data.message, valid: true });
      })
      .catch((e) => {
        console.log({ text: e.response.data.message, valid: true });
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
            <div className="formsText">이메일</div>
            <div className="emailContainer">
              <input placeholder="ex) abcdefgh@email.com" type="email" onChange={(e) => setEmail(e.target.value)} />
              <button className="repititiveCheck" type="button" onClick={handleEmailValidButton}>
                중복확인
              </button>
            </div>
            {error.email.format && <div className="errorText">이메일 형식이 아닙니다.</div>}
            {emailValid.valid && <div className="successText">{emailValid.text}</div>}
          </Email>
          <Password>
            <div className="formsText">비밀번호</div>
            <input minLength={5} type="password" />
            {error.password.length && <div className="errorText">비밀번호는 5글자 이상이여야합니다.</div>}
          </Password>
          <PasswordConfirm>
            <div className="formsText">비밀번호 재확인</div>
            <input minLength={5} type="password" />
            {error.password.confirm && <div className="errorText">비밀번호가 일치하지 않습니다.</div>}
          </PasswordConfirm>
          <NickName>
            <div className="formsText">닉네임</div>
            <input minLength={2} type="text" onChange={(e) => setUsername(e.target.value)} />
            <button className="repititiveCheck" type="button" onClick={handleUserNameValidButton}>
              중복확인
            </button>
            {error.username && <div className="errorText">유저 이름을 입력해주세요.</div>}
          </NickName>
          <AvatarChoose>
            <div className="formsText">아바타 선택</div>
            <label htmlFor="file">업로드</label>
            <input style={{ display: "none" }} onChange={fileUploadHandler} type="file" id="file"></input>
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
    text-align: center;
    .repititiveCheck {
      font-size: 10px;
      padding: 8px 8px;
      margin-left: 10px;
    }
    .formsText {
      text-align: start;
    }
    .successText {
      font-size: 12px;
      color: RGB(50, 174, 37);
      text-align: start;
      margin-top: 10px;
    }
    .errorText {
      font-size: 12px;
      color: red;
      text-align: start;
      margin-top: 10px;
    }
    input {
      height: 30px;
      width: 250px;
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

const Email = styled.div`
  display: flex;
  flex-direction: column;
  width: 311px;
  padding: 15px 0;

  .emailContainer {
    display: flex;
    justify-content: flex-start;
  }
`;

const Password = styled.div`
  width: 311px;
  text-align: start;
  padding: 15px 0;
`;

const PasswordConfirm = styled.div`
  width: 311px;
  text-align: start;
  padding: 15px 0;
`;

const NickName = styled.div`
  width: 311px;
  padding: 15px 0;
`;

const AvatarChoose = styled.div`
  width: 311px;
  text-align: start;
  padding: 15px 0;
  margin-bottom: 15px;
  .formsText {
    margin-bottom: 10px;
  }
  label {
    font-size: 20px;
    border: 1px solid black;
    cursor: pointer;
    padding: 3px;
    border-radius: 8px;
  }
`;
