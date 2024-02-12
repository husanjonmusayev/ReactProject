import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
function SiginIn() {
  let [nameErr, setNameerr] = useState(false);
  let [passwordErr, setPassworderr] = useState(false);
  let nameRef = useRef("");
  let passwordRef = useRef("");

  //  validate function

  function validate(nameRef, passwordRef) {
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

    if (!passwordRef.current.value.trim()) {
      passwordRef.current.focus();
      setPassworderr(true);
      return false;
    } else {
      setPassworderr(false);
    }

    return true;
  }

  function clear(nameRef, passwordRef) {
    nameRef.current.value = "";
    passwordRef.current.value = "";
  }

  function hendalsubmit(e) {
    e.preventDefault();
    if (validate(nameRef, passwordRef)) {
      let user = {
        username: nameRef.current.value,
        password: passwordRef.current.value,
      };

      axios
        .post(import.meta.env.VITE_API_SIGNIN_URL, user)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    clear(nameRef, passwordRef);
  }
  // show pasword
  const [showpassword, setShowpassword] = useState(true);

  function hendalclick() {
    showpassword ? setShowpassword(false) : setShowpassword(true);
  }

  return (
    <div className="content">
      <div className="Form-wrapper">
        <header>
          <img src="/Logo.png" alt="form_logo" />
          <h2>Xush kelibsiz!</h2>
          <p>Login parolingizni kiritib o‘z kabinetingizga kiring.</p>
        </header>
        <form onSubmit={hendalsubmit}>
          <p>Name</p>
          <input ref={nameRef} type="text" placeholder="Isimingizni kiriting" />
          <p>{nameErr ? "isim bo'lishi shart" : ""}</p>
          <p>Parol</p>
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
          <button>Kirish</button>
        </form>
        <p className="footer">Copyright ©  2024 Vim kompaniyasi</p>
      </div>
      <div className="Img-wrraper">
        <img src="/male.png" alt="male-img" />
      </div>
    </div>
  );
}

export default SiginIn;
