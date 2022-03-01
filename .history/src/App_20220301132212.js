import './App.css';
import PokeListPage from './pages/pokeListPage/PokeListPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokeDetailsPage from './pages/pokeDetailsPage/PokeDetailsPage';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/pokemon/:pokemonId" element={<PokeDetailsPage/>}/>
          <Route path="/" element={<PokeListPage/>}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
