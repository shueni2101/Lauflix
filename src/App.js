import './App.css';
import Movies from "./componentes/Movies/Movies.jsx";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Series from "./componentes/Series/Series.jsx"

function App() {
  return (
    <div className="App">
       <Router>
      <div className="container2">
       
        <div className="containerNavBar"> 
        
          <nav className='navBar'>
            <div className='containerNeon'>

          <div className="neon">
          <span className="text" data-text="Lauflix">Lauflix</span>
          <span className="gradient"></span>
          <span className="spotlight"></span>
        </div>
        </div>
        <div className='containerUl'>
            <ul className= "ul"> 
              <li className="li">
                <Link to="/" className="link">Movies</Link>
              </li>
              <li className="li">
                <Link to="/series" className="link">Series</Link>
              </li>
            </ul>
        </div>
          </nav>
        </div>
        <div className='rutas'>
        <Routes>
        
          <Route path="/" exact element={ <Movies />} />
            
          <Route path="/series" exact element={ <Series />} />
        </Routes>
        </div>
    </div>
    </Router>
    </div>
  );
}

export default App;
