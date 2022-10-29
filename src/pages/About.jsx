import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const About = () => {
  document.title = `About`;

  return (
    // Just some info about the site.
    <div className="about">
      <Header page="About" />
      <div className="col-9 col-s-9 aboutInfo">
        <h1>Welcome to Post website</h1>
        <h2>My first website!</h2>
        <h3>Brief description of the website</h3>

        <p>
          Thank you for visiting my site, I have built this site using ReactJS,
          Vite, SCSS, HTML, JavaScript. The site is about social media based on
          posts & users, it contains 5 pages: About, Profile, Home, Register,
          Login.
        </p>
        <p>
          Profile page: at first it contains nothing until user loges in or
          registers, after login it shows user's profile information and at the
          bottom user's posts on the site, the user can delete or edit his likes
          if it's his profile but at others profile he can only like their posts
        </p>
        <p>
          Home page: it shows all posts on the site, user can filter posts by
          date or likes, also sort posts by date and popularity, user can add
          post by top menu or sidebar, he can also here delete or edit only his
          posts.
        </p>
        <p>
          Register page: if user isn't logged in then this page will ask user to
          register, after register user can view his profile.
        </p>
        <p>
          Login page: if user isn't logged in then this page will ask user to
          login, after login user can view his profile.
        </p>
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default About;
