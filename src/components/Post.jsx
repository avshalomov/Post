import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";
import EditPost from "./EditPost";
import posts from "../data/posts";
import users from "../data/users";

function Post({ id, deletePost }) {
  // Get post & user info from data by id
  const post = posts.find((post) => post.id == id);
  const user = users.find((user) => user.id == post.userId);
  const [onEdit, setOnEdit] = useState(false);
  const [reactions, setReactions] = useState(post.reactions);
  const { loggedIn, loggedInUserId } = useContext(LoginContext);
  const name = user.firstName + " " + user.lastName;
  const image = user.image;
  const title = post.title;
  const body = post.body;

  // update reactions data
  useEffect(() => {
    const indexOfPost = posts.findIndex((post) => post.id == id);
    posts[indexOfPost].reactions = reactions;
  }, [reactions]);

  // Function that changes to edit mode
  function editPost() {
    setOnEdit(true);
  }

  return onEdit ? (
    // Post editing window
    <EditPost id={id} setOnEdit={setOnEdit} />
  ) : (
    
    // Post content
    <div className={`col-9 col-s-9 post${id}`}>
      <Link to={`/profile/${user.id}`}>
        <img src={image} alt={name} />
      </Link>
      <h1>{name}</h1>
      <h4>{post.date}</h4>
      <h2>{title}</h2>
      <div className="tags">
        <h3>Tags:</h3>
        {post.tags.map((tag, index) => (
          <p key={index}>{`[${tag}]`}</p>
        ))}
      </div>
      <p>{body}</p>

      {/* User can't like his own posts */}
      {loggedIn && loggedInUserId == user.id ? (
        <button>{reactions}⭐</button>
      ) : (
        <button onClick={() => setReactions(reactions + 1)}>
          {reactions}⭐
        </button>
      )}

      {/* User can't delete other's posts */}
      {loggedIn && loggedInUserId == user.id && (
        <button onClick={() => deletePost(id)}>Delete</button>
      )}

      {/* User can't edit other's posts */}
      {loggedIn && loggedInUserId == user.id ? (
        <button onClick={() => editPost(id)}>Edit</button>
      ) : null}
    </div>
  );
}

export default Post;
