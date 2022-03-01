import './App.css';
import PokeListPage from './pages/pokeListPage/PokeListPage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PokeDetailsPage from './pages/pokeDetailsPage/PokeDetailsPage';
import logo from './static/pokeball-icon-png-12.jpg'
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <header className="header">
        <img alt="pokeball" src={logo} className="pokeball-icon"/>
        <Link to="/pokemon">Pokemon</Link>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pokemon/:pokemonId" element={<PokeDetailsPage/>}/>
          <Route path="/pokemon" element={<PokeListPage/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
