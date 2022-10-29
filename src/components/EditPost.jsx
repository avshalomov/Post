import { useState } from "react";
import posts from "../data/posts";
import users from "../data/users";

// This component show only when user click on edit button.

function EditPost({ id, setOnEdit }) {
  // Get post to edit.
  const post = posts.find((post) => post.id == id);
  const user = users.find((user) => user.id == post.userId);
  const [title, setTitle] = useState(post.title);
  const [tags, setTags] = useState(post.tags);
  const [body, setBody] = useState(post.body);
  const name = user.firstName + " " + user.lastName;
  const image = user.image;

  // Handling inputs change.
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "title") setTitle(value);
    if (name == "tags") setTags(value.split(","));
    if (name == "body") setBody(value);
  };

  // Handling submit.
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const tags = e.target.tags.value.split(",");
    const body = e.target.body.value;
    const indexOfPost = posts.findIndex((post) => post.id == id);
    posts[indexOfPost].title = title;
    posts[indexOfPost].tags = tags;
    posts[indexOfPost].body = body;
    setOnEdit(false);
  };

  return (
    <div className="EditPost">
      <form onSubmit={handleSubmit}>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <h4>{post.date}</h4>

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
          <button type="submit">Save</button>
        </label>
      </form>
    </div>
  );
}

export default EditPost;
