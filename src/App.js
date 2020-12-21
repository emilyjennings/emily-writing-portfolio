import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Navbar from "./components/Navbar.js"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Navbar />
        < Header />
        < Body />
      </header>
    </div>
  );
}

export default App;
