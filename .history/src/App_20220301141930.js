import './App.css';
import PokeListPage from './pages/pokeListPage/PokeListPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokeDetailsPage from './pages/pokeDetailsPage/PokeDetailsPage';
import logo from './static/pokeball-icon-png-12.jpg'

function App() {
  return (
    <Router>
      <header className="header">
        <img alt="pokeball" src={logo}/>
      </header>
      <main className="main">
        <Routes>
          <Route path="/pokemon/:pokemonId" element={<PokeDetailsPage/>}/>
          <Route path="/" element={<PokeListPage/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
