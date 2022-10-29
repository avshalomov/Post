import { useState } from "react";
import posts from "../data/posts";
import users from "../data/users";

function NewPost({ userId, setAddingPost, setPosts }) {
  // Get user info & set post info.
  const user = users.find((user) => user.id == userId);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [body, setBody] = useState("");
  const name = user.firstName + " " + user.lastName;
  const image = user.image;

  // Handle changes to input fields.
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "title") setTitle(value);
    if (name == "tags") setTags(value.split(","));
    if (name == "body") setBody(value);
  };

  // Handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: +Math.random().toString().slice(2, 20),
      title: title,
      body: body,
      userId: userId,
      tags: tags,
      reactions: 0,
      date: new Date().toString().slice(0, 15),
    };
    posts.push(newPost);
    setPosts([...posts]);
    setAddingPost(false);
  };

  return (
    // Form to create a new post.
    <div className="EditPost">
      <form onSubmit={handleSubmit}>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <h4>{new Date().toString().slice(0, 15)}</h4>

        <label htmlFor="title" className="col-12 col-s-12 title">
          Title
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="tags" className="col-12 col-s-12 tags">
          Tags
          <textarea
            name="tags"
            id="tags"
            value={tags}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="body" className="col-12 col-s-12 body">
          Body
          <textarea
            name="body"
            id="body"
            value={body}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </label>
      </form>
    </div>
  );
}

export default NewPost;
