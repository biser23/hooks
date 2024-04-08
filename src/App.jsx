import './App.css';
import React from 'react';
import useCustomHook from './hooks/useCustomHook';

const App = () => {
  const { data: pokemonData, isLoading: pokemonLoading, error: pokemonError } = useCustomHook('https://pokeapi.co/api/v2/pokemon/1');
  const { data: rickData, isLoading: rickLoading, error: rickError } = useCustomHook('https://rickandmortyapi.com/api/character/1');

  if (pokemonLoading || rickLoading) {
    return <div>Loading...</div>;
  }

  if (pokemonError || rickError) {
    return <div>Error: {pokemonError || rickError.message}</div>;
  }

  return (
    <div>
      <h2>Personaje Pokemon</h2>
      {pokemonData && (
        <>
          <p>{pokemonData.name}</p>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </>
      )}

      <h2>Personaje Rick and Morty</h2>
      {rickData && (
        <>
          <p>{rickData.name}</p>
          <img src={rickData.image} alt={rickData.name} />
        </>
      )}
    </div>
  );
};

export default App;