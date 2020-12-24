import { Link } from "react-router-dom";

function Navbar() {
  return(
    <div className="navbar">
      <a href="https://drive.google.com/file/d/1kPJd09V4318fcDFnG_6U9SjzskIOwFNd/view?usp=sharing">Resume</a>
      <div className="nav-link"><Link to="/">Home</Link></div>
      <div className="nav-link"><Link to="/about">About</Link></div>
      <div className="nav-link"><Link to="/contact">Contact</Link></div>
    </div>
  );
}

export default Navbar
