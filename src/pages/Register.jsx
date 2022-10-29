import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import users from "../data/users";

const Register = () => {
  // Get login context.
  document.title = `Register`;
  const { loggedIn, setLoggedIn, setLoggedInUserId } = useContext(LoginContext);

  // Build empty user object
  const [user, setUser] = useState({
    id: undefined,
    firstName: undefined,
    lastName: undefined,
    maidenName: undefined,
    age: undefined,
    gender: undefined,
    email: undefined,
    phone: undefined,
    username: undefined,
    password: undefined,
    birthDate: undefined,
    image: undefined,
    bloodGroup: undefined,
    height: undefined,
    weight: undefined,
    eyeColor: undefined,
    hair: { color: undefined, type: undefined },
    domain: undefined,
    ip: undefined,
    address: {
      address: undefined,
      city: undefined,
      coordinates: { lat: undefined, lng: undefined },
      postalCode: undefined,
      state: undefined,
    },
    macAddress: undefined,
    university: undefined,
    bank: {
      cardExpire: undefined,
      cardNumber: undefined,
      cardType: undefined,
      currency: undefined,
      iban: undefined,
    },
    company: {
      address: {
        address: undefined,
        city: undefined,
        coordinates: { lat: undefined, lng: undefined },
        postalCode: undefined,
        state: undefined,
      },
      department: undefined,
      name: undefined,
      title: undefined,
    },
    ein: undefined,
    ssn: undefined,
    userAgent: undefined,
  });

  // Handle all the inputs in the form.
  function handleChange(e) {
    if (e.target.name === "firstName") {
      setUser({ ...user, firstName: e.target.value });
    }
    if (e.target.name === "lastName") {
      setUser({ ...user, lastName: e.target.value });
    }
    if (e.target.name === "age") {
      setUser({ ...user, age: e.target.value });
    }
    if (e.target.name === "gender") {
      setUser({ ...user, gender: e.target.value });
    }
    if (e.target.name === "email") {
      setUser({ ...user, email: e.target.value });
    }
    if (e.target.name === "username") {
      setUser({ ...user, username: e.target.value });
    }
    if (e.target.name === "password") {
      setUser({ ...user, password: e.target.value });
    }
    if (e.target.name === "address.city") {
      setUser({ ...user, address: { ...user.address, city: e.target.value } });
    }
    if (e.target.name === "address.state") {
      setUser({ ...user, address: { ...user.address, state: e.target.value } });
    }
    if (e.target.name === "company.department") {
      setUser({
        ...user,
        company: { ...user.company, department: e.target.value },
      });
    }
    if (e.target.name === "company.title") {
      setUser({ ...user, company: { ...user.company, title: e.target.value } });
    }
  }

  // Handle the Register button.
  function handleRegister(e) {
    e.preventDefault();
    console.log(user);
    if (
      user.firstName &&
      user.lastName &&
      user.age &&
      user.gender &&
      user.email &&
      user.username &&
      user.password &&
      user.address.city &&
      user.address.state &&
      user.company.department &&
      user.company.title
    ) {
      user.id = Math.random().toString().split(".")[1];
      user.image = "https://source.unsplash.com/random/400x400";
      console.log(user);
      users.push(user);
      console.log(users);
      setLoggedIn(true);
      setLoggedInUserId(user.id);
    } else {
      alert("Please fill all the fields before registering.\nThank you.");
    }
  }

  return loggedIn ? (
    // If user is logged in, show the dashboard.
    <div className="register">
      <Header page="Register" />
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
      <Sidebar />
      <Footer />
    </div>
  ) : (

    // If user is not logged in, show the register form.
    <div className="register">
      <Header page="Register" />

      {/* All the form for the registration */}
      <form onSubmit={handleRegister} className="col-9 col-s-9 registerWindow">
        <h1>Welcome to Post!</h1>
        <h2>Please register or login</h2>

        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="age">
          Age
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="gender">
          Gender
          <select
            type="text"
            name="gender"
            placeholder="Select"
            onChange={handleChange}
          >
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="address.city">
          City
          <input
            type="text"
            name="address.city"
            placeholder="Enter your city"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="address.state">
          State
          <input
            type="text"
            name="address.state"
            placeholder="Enter your state"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="company.department">
          Work Department
          <input
            type="text"
            name="company.department"
            placeholder="Enter your department"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="company.title">
          Job Title
          <input
            type="text"
            name="company.title"
            placeholder="Enter your title"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
        <Link to="/Login">
          <button>Login</button>
        </Link>
      </form>
      
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Register;
