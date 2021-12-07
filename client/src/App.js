import { Routes, Route } from 'react-router';
import './App.css';
import Pokemons from './components/pokemons/Pokemons';
import LandPage from './components/landPage/LandPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandPage/>}/>
        <Route path='/pokemons' element={<Pokemons/>}/>
      </Routes>
    </div>
  );
}

export default App;
