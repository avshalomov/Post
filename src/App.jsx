import { React, useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";

// Exporting login context so that it can be used in other components.
export const LoginContext = createContext();

function App() {
  const [loggedInUserId, setLoggedInUserId] = useState(1);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider
      value={{ loggedIn, setLoggedIn, loggedInUserId, setLoggedInUserId }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="About" element={<About />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Profile/*" element={<Profile />} />
            <Route index element={<Home />} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
