import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const NoPage = () => {
  document.title = `Incorrect Page`;
  return (
    <div className="noPage">
      <Header page="Wrong page" />
      <div className="col-9 col-s-9 noPageInfo">
        <img src="src/img/cat (1).gif" alt="cat" />
        <img src="src/img/cat (2).gif" alt="cat" />
        <img src="src/img/cat (3).gif" alt="cat" />
        <h1>OoOops! you are in a wrong page...</h1>
        <p>This link doesn't exist so check your link.</p>
        <img src="src/img/cat (4).gif" alt="cat" />
        <img src="src/img/cat (5).gif" alt="cat" />
        <img src="src/img/cat (6).gif" alt="cat" />
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default NoPage;
