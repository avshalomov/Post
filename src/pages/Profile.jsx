import { React, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProfileInfo from "../components/ProfileInfo";
import Post from "../components/Post";
import Footer from "../components/Footer";
import posts from "../data/posts";

const Profile = () => {
  // Get user id from url
  document.title = `Profile`;
  const { loggedIn, loggedInUserId } = useContext(LoginContext);
  const [userId, setUserId] = useState(useLocation().pathname.split("/")[2]);

  // Delete post
  function deletePost(id) {
    const indexOfPost = posts.findIndex((post) => post.id == id);
    postsData.splice(indexOfPost, 1);
    setPosts([...postsData]);
  }

  return loggedIn || userId ? (
    // If user is logged in or is viewing another user's profile
    <div id="profile">
      <Header page="Profile" />
      <ProfileInfo loggedInUserId={loggedInUserId} />
      <h1>{`Posts`}</h1>
      {posts
        .slice(0)
        .reverse()
        .map(
          (post, index) =>
            (post.userId == userId || post.userId == loggedInUserId) && (
              <Post key={post.id} id={post.id} deletePost={deletePost} />
            )
        )}
      <Sidebar />
      <Footer />
    </div>
  ) : (

    // If user is not logged in
    <div id="profile">
      <Header page="Profile" />
      <div className="col-9 col-s-9 ProfileIntro">
        <h1>Welcome!</h1>
        <h2>You are not logged in.</h2>
        <h3>You have an account? you can log in.</h3>
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <h3>You don't have an account? you can register.</h3>
        <Link to="/Register">
          <button>Register</button>
        </Link>
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Profile;
