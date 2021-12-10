import { Routes, Route } from 'react-router';
import './App.css';
import Pokemons from './components/pokemons/Pokemons';
import LandPage from './components/landPage/LandPage';
import CreatePokemon from './components/createPokemon/CreatePokemon';
import PokemonFiltered from './components/pokemonFiltered/PokemonFiltered'
import { useSelector } from 'react-redux';



function App() {
  const name = useSelector((state) => state.pokemonReducer.pokemonFiltered);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandPage/>}/>
        <Route path='/pokemons' element={<Pokemons />} />
        <Route path={`/pokemons/${name}`} element={<PokemonFiltered/>}/>
        <Route path='/pokemons/createpokemon' element={<CreatePokemon />} />
      </Routes>
    </div>
  );
}

export default App;
