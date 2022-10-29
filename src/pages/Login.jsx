import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import users from "../data/users";

const Login = () => {
  // Get login state from context & declaring states.
  document.title = `Login`;
  const { loggedIn, setLoggedIn, setLoggedInUserId } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handling login form change.
  const handleChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  // Handling login form submit.
  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setLoggedIn(true);
      setLoggedInUserId(user.id);
      alert(
        "Login successfully\nWelcome " + user.firstName + " " + user.lastName
      );
    } else {
      alert("Invalid username or password\nPlease try again");
    }
  };


  return (
    <div className="login">
      <Header page="Login" />

      {loggedIn ? (
        // If user is logged in, show this.
        <div className="col-9 col-s-9 ProfileIntro">
          <h1>Welcome!</h1>
          <h2>You are already logged in.</h2>
          <Link>
            <button onClick={() => setLoggedIn(false)}>Logout</button>
          </Link>
          <Link to="/Profile">
            <button>Profile</button>
          </Link>
        </div>
      ) : (
        
        // If user is not logged in, show this.
        <form onSubmit={handleLogin} className="col-9 col-s-9 LoginWindow">
          <h1>Hello!</h1>
          <h2>Please login to continue</h2>
          <label htmlFor="Username" className="UserName">
            Username
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="Password" className="Password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Login</button>
          <Link to="/Register">
            <button>Register</button>
          </Link>
        </form>
      )}

      <Sidebar />
      <Footer />
    </div>
  );
};

export default Login;
