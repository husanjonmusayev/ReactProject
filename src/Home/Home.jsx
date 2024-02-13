import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";


export default function Home() {
  let data = JSON.parse(localStorage.getItem("users"));
  let name = data.data.username;
  let id = data.data.id;
  let email = data.data.email;
  let userToken = data.data.accessToken;

  // LOG OUT

  function hendalOut() {
    axios
      .delete(import.meta.env.VITE_API_DELETE, userToken)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="home-content">
      <header>
        <nav>
          <Link to="/">Sigin in</Link>
          <div className="thum">
            <Link to="/about">About</Link>
            <Link onClick={hendalOut}>Log out</Link>
          </div>
        </nav>
      </header>
      <main>
        {
          <div className="card">
            <img src="/user.png" alt="user_icon" />
            <p>Name: {name}</p>
            <p>ID:{id}</p>
            <p>Email : {email}</p>
          </div>
        }
      </main>
    </div>
  );
}
