import axios from "axios";
import { useState } from "react";
import { useRef } from "react";

export default function Reg(props) {
  let [col, setCol] = useState("");
  let [emailErr, setEmailerr] = useState(false);
  let [nameErr, setNameerr] = useState(false);
  let [passwordErr, setPassworderr] = useState(false);
  let [open, setOpen] = useState(true);
  let nameRef = useRef("");
  let passwordRef = useRef("");
  let EmailRef = useRef("");

  //  validate function

  function validate(nameRef, passwordRef, open) {
    if (!nameRef.current.value.trim()) {
      nameRef.current.focus();
      setNameerr(true);
      return false;
    } else {
      setNameerr(false);
    }

    if (Number(nameRef.current.value.trim())) {
      nameRef.current.focus();
      alert("isim hariflardan iborat bo'lsin");
      return false;
    }

    if (open) {
      if (!EmailRef.current.value) {
        EmailRef.current.focus();
        setEmailerr(true);
        return false;
      } else {
        setEmailerr(false);
      }
    }

    if (!passwordRef.current.value.trim()) {
      passwordRef.current.focus();
      setPassworderr(true);
      return false;
    } else {
      setPassworderr(false);
    }

    return true;
  }

  //  clear function

  function clear(nameRef, passwordRef, EmailRef) {
    nameRef.current.value = "";
    passwordRef.current.value = "";
    EmailRef.current.value = "";
  }

  // click sigin in

  function hendalSiginIn() {
    open ? setOpen(false) : setOpen(true);
  }

  // register function

  function hendalsubmit(e) {
    e.preventDefault();
    if (validate(nameRef, passwordRef, EmailRef)) {
      let user = {
        username: nameRef.current.value,
        email: EmailRef.current.value,
        password: passwordRef.current.value,
      };
      setCol(EmailRef.current.value);
      axios
        .post(import.meta.env.VITE_API, user)
        .then((res) => {
          if (res.data.message == "User registered successfully!") {
            setOpen(false);
          } else {
            alert(
              "Qandaydir hatolik yuz berdi Iltimos qaytadan urinib ko'ring"
            );
          }
        })
        .catch((err) => console.log(err));
      clear(nameRef, passwordRef, EmailRef);
    }
    if (!open) {
      if (validate(nameRef, passwordRef)) {
        let user = {
          username: nameRef.current.value,
          email: col,
          password: passwordRef.current.value,
        };

        axios
          .post(import.meta.env.VITE_API_SIGNIN, user)
          .then((res) => {
            if (res.request.status == 200) {
              props.click(true);
            }else{
          alert("foydalanuvchi topilmadi")
            }
          })
          .catch((err) => console.log(err));
      }
      clear(nameRef, passwordRef);
    }
  }

  // show pasword
  const [showpassword, setShowpassword] = useState(true);

  // clouse password
  function hendalclick() {
    showpassword ? setShowpassword(false) : setShowpassword(true);
  }

  return (
    // content wrapper 
    <div className="content">
      {/* form wrapper  */}
      <div className="Form-wrapper">
        <header>
          {/* header  */}
          <img src="/Logo.png" alt="form_logo" />
          <h2>Xush kelibsiz!</h2>
          <p>Login parolingizni kiritib o‘z kabinetingizga kiring.</p>
        </header>
        {/* form  */}
        <form onSubmit={hendalsubmit}>
          <div className="name-wrapper">
            <span>Name</span>
            <input
              ref={nameRef}
              type="text"
              placeholder="Isimingizni kiriting"
            />
            <p>{nameErr ? "isim bo'lishi shart" : ""}</p>
          </div>
          <div className={open ? "email-wrapper" : "not"}>
            <span>Email</span>
            <input ref={EmailRef} type="text" placeholder="email kiriting" />
            <p>{emailErr ? "email bo'lishi shart" : ""}</p>
          </div>
          <div className="password-wrapper">
            <span>Parol</span>
            <input
              ref={passwordRef}
              type={showpassword ? "password" : "text"}
              placeholder="Parolingizni kiriting"
            />
            <p>{passwordErr ? "password bo'lishi shart" : ""}</p>
            <img
              onClick={hendalclick}
              className="rame"
              src="/rame.png"
              alt="icon"
            />
          </div>
          <button>{open ? "Ro'yhatdan O'tish" : "Kirish"}</button>
        </form>
        <p className="footer">
          Oldinham ro'yhatdan otkanmisiz{" "}
          <a onClick={hendalSiginIn}>{open ? "Sigin In" : "Sigin Up"}</a>
        </p>
      </div>
      {/* img wrapper  */}
      <div className="Img-wrraper">
        <img src="/male.png" alt="male-img" />
      </div>
    </div>
  );
}
