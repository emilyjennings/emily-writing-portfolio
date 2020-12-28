import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  return(
    <div className="navbar">
      <a href="https://drive.google.com/file/d/1kPJd09V4318fcDFnG_6U9SjzskIOwFNd/view?usp=sharing">Resume</a>
      <div className="nav-link"><Link to="/">Home</Link></div>
      <div className="nav-link"><Link to="/about">About</Link></div>
      <div className="nav-link"><Link to="/contact">Contact</Link></div>
      <div className="nav-link"><Link to="https://shaktimindfulawakening.com">Blog</Link></div>
      <div class="social">
        <a href="https://twitter.com/Phillylosophy"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a href="https://awakening-journey.medium.com/"><FontAwesomeIcon icon={['fab', 'medium']} /></a>
        <a href="https://www.linkedin.com/in/emily-jennings-profile/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
      </div>
    </div>
  );
}

export default Navbar
