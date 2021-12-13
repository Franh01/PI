import { Routes, Route } from 'react-router';
import './App.css';
import Pokemons from './components/pokemons/Pokemons';
import LandPage from './components/landPage/LandPage';
import CreatePokemon from './components/createPokemon/CreatePokemon';
import PokemonFiltered from './components/pokemonFiltered/PokemonFiltered'; 
import Error from './components/error404/Error';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandPage/>}/>
        <Route path='/pokemons' element={<Pokemons />} />
        <Route path={'/pokemons/:pokemonName'} element={<PokemonFiltered/>}/>
        <Route path='/pokemons/createpokemon' element={<CreatePokemon />} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
