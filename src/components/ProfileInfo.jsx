import { useLocation } from "react-router-dom";
import { useState } from "react";
import users from "../data/users";

function ProfileInfo({ loggedInUserId }) {
  // Gets the user id from the url
  const [userId, setUserId] = useState(useLocation().pathname.split("/")[2]);

  // Sets the user id to the logged in user id if the user is on his own profile
  const [user, setUser] = useState(
    userId
      ? users.find((user) => user.id == userId)
      : users.find((user) => user.id == loggedInUserId)
  );

  // Sets page title to the user's name
  document.title = `Profile - ${user.firstName} ${user.lastName}`;

  // Lays out the user's info
  return (
    <div className="col-9 col-s-9 profileInfo">
      <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
      <h1>{`${user.firstName} ${user.lastName}`}</h1>
      <h2>{`Email: ${user.email}`}</h2>
      <h3>{`Job: ${user.company.title} at ${user.company.department}`}</h3>
      <h4>{`${user.age} years old ${user.gender} from ${user.address.city}, ${user.address.state}`}</h4>
    </div>
  );
}

export default ProfileInfo;
