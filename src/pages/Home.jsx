import { useState, useContext } from "react";
import { LoginContext } from "../App";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import postsData from "../data/posts";
import Post from "../components/Post";
import NewPost from "../components/NewPost";
import Footer from "../components/Footer";

const Home = () => {
  // Get posts from data, login state from context & declaring states.
  document.title = `Home`;
  const [posts, setPosts] = useState(postsData);
  const { loggedIn, loggedInUserId } = useContext(LoginContext);
  const [addingPost, setAddingPost] = useState(false);
  const [sort, setSort] = useState("newest");
  const [filter, setFilter] = useState({
    fromDate: "",
    toDate: "",
    fromLikes: "",
    toLikes: "",
  });

  // Handling filter state.
  function handleFilterChange(e) {
    const { name, value } = e.target;
    setFilter((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  // Handling filter submit.
  function handleFilter(e) {
    e.preventDefault();
    const filteredPosts = postsData.filter((post) => {
      const postDate = new Date(post.date);
      const fromDate = new Date(filter.fromDate);
      const toDate = new Date(filter.toDate);
      const fromLikes = parseInt(filter.fromLikes);
      const toLikes = parseInt(filter.toLikes);
      if (
        (filter.fromDate === "" || postDate >= fromDate) &&
        (filter.toDate === "" || postDate <= toDate) &&
        (filter.fromLikes === "" || post.reactions >= fromLikes) &&
        (filter.toLikes === "" || post.reactions <= toLikes)
      ) {
        return true;
      }
      return false;
    });
    setPosts(filteredPosts);
  }

  // delete post function.
  function deletePost(id) {
    const indexOfPost = posts.findIndex((post) => post.id == id);
    postsData.splice(indexOfPost, 1);
    setPosts([...postsData]);
  }

  // Change adding post state.
  function addPost() {
    setAddingPost(true);
  }

  return addingPost ? (
    // If adding post.
    <NewPost
      userId={loggedInUserId}
      setAddingPost={setAddingPost}
      setPosts={setPosts}
    />
  ) : (
    // Default home showcase.
    <div className="home">
      <Header page="Home" />

      <form onSubmit={handleFilter} className="filter">
        <div>
          <h3>Date</h3>
          <label htmlFor="fromDate">From </label>
          <input
            type="date"
            name="fromDate"
            id="fromDate"
            value={filter.fromDate}
            onChange={handleFilterChange}
          />
          <label htmlFor="toDate">To </label>
          <input
            type="date"
            name="toDate"
            id="toDate"
            value={filter.toDate}
            onChange={handleFilterChange}
          />
        </div>

        <div>
          <h3>Stars</h3>
          <label htmlFor="fromLikes">Min </label>
          <input
            type="number"
            name="fromLikes"
            id="fromLikes"
            value={filter.fromLikes}
            onChange={handleFilterChange}
          />
          <label htmlFor="toLikes">Max </label>
          <input
            type="number"
            name="toLikes"
            id="toLikes"
            value={filter.toLikes}
            onChange={handleFilterChange}
          />
        </div>

        <button type="submit">Filter</button>

        {/* If user logged in allow adding new post */}
        {loggedIn && <button onClick={() => addPost()}>New Post</button>}
      </form>

      {/* Set sorting state buttons. */}
      <div className="sort">
        <button onClick={() => setSort("newest")}>Newest</button>
        <button onClick={() => setSort("oldest")}>Oldest</button>
        <button onClick={() => setSort("popular")}>Popular</button>
        <button onClick={() => setSort("unpopular")}>Unpopular</button>
      </div>

      {/* Sort posts deppending on state. */}
      {sort === "newest" &&
        posts
          .slice(0)
          .reverse()
          .map((post, index) => (
            <Post key={post.id} id={post.id} deletePost={deletePost} />
          ))}

      {sort === "oldest" &&
        posts.map((post, index) => (
          <Post key={post.id} id={post.id} deletePost={deletePost} />
        ))}

      {sort === "popular" &&
        posts
          .slice(0)
          .sort((a, b) => b.reactions - a.reactions)
          .map((post, index) => (
            <Post key={post.id} id={post.id} deletePost={deletePost} />
          ))}

      {sort === "unpopular" &&
        posts
          .slice(0)
          .sort((a, b) => a.reactions - b.reactions)
          .map((post, index) => (
            <Post key={post.id} id={post.id} deletePost={deletePost} />
          ))}

      <Sidebar addPost={addPost} />
      <Footer />
    </div>
  );
};

export default Home;
