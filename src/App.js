import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Navbar from "./components/Navbar.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"

import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faMedium, faLinkedin)

function App() {
  return (
    <Router >
      <div className="App">
          < Navbar />
          < Header />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Body} />
          <Route exact path="/contact" component={Contact} />
      </div>
    </ Router >
  );
}

export default App;
