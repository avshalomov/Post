import { useEffect, useState, useContext } from "react";
import { LoginContext } from "../App";
import users from "../data/users";

function Sidebar({ addPost }) {
  // Setting up time & getting url params & login context.
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toString().slice(0, 15));
  const [isHome, setIsHome] = useState(window.location.pathname == "/");
  const { loggedIn, loggedInUserId } = useContext(LoginContext);
  const [user, setUser] = useState(users.find((user) => user.id == loggedInUserId));

  // Clock updates every second until the component is unmounted
  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sidebar">
      <h1>Welcome</h1>
      {loggedIn && (
        // If user is logged in, show his name
        <div>
          <h1>{user.firstName}</h1>
          <h1>{user.lastName}</h1>
        </div>
      )}
      <div className="clock">
        <p>{clock}</p>
      </div>
      <div className="date">
        <p>{date}</p>
      </div>
      {/* If user is logged show "Post" button */}
      {isHome && loggedIn ? <button onClick={addPost}>Post</button> : null}
    </div>
  );
}

export default Sidebar;
