import { useState, useRef } from "react";
function SiginIn() {
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
        <form>
          <p>Login</p>
          <input type="text" placeholder="Loginingizni kiriting" />
          <p>Parol</p>
          <input
            type={showpassword ? "password" : "text"}
            placeholder="Parolingizni kiriting"
          />
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
