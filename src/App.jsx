import { useState } from 'react'

function App() {
  const [pokemon, setPokemon] = useState(null)
  const [name, setName] = useState('')
  const [offlineData, setOfflineData] = useState(null)

  const fetchPokemon = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      if (!res.ok) throw new Error('No encontrado')
      const data = await res.json()
      setPokemon(data)
      localStorage.setItem('lastPokemon', JSON.stringify(data))
      setOfflineData(null)
    } catch (error) {
      const cached = localStorage.getItem('lastPokemon')
      if (cached) setOfflineData(JSON.parse(cached))
      setPokemon(null)
    }
  }

  return (
    <div className="container">
      <h1>Pokédex PWA</h1>
      <p>Busca un Pokémon por su nombre. Si estás offline, se mostrará la última búsqueda.</p>

      <input
        type="text"
        placeholder="Nombre del Pokémon"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={fetchPokemon}>Buscar</button>

      {pokemon && (
        <div className="card">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>HP: {pokemon.stats[0].base_stat}</p>
          <p>Ataque: {pokemon.stats[1].base_stat}</p>
          <p>Defensa: {pokemon.stats[2].base_stat}</p>
        </div>
      )}

      {offlineData && !pokemon && (
        <div className="card">
          <h2>{offlineData.name} (offline)</h2>
          <img src={offlineData.sprites.front_default} alt={offlineData.name} />
          <p>HP: {offlineData.stats[0].base_stat}</p>
          <p>Ataque: {offlineData.stats[1].base_stat}</p>
          <p>Defensa: {offlineData.stats[2].base_stat}</p>
        </div>
      )}
    </div>
  )
}

export default App
