import { useEffect, useState } from 'react';
import '../styles/App.scss';
import getDataApi from '../services/Api';
import CharacterList from './CharacterList';


function App () {
  const [dataCharacters, setDataCharacters] = useState([])
  const [filterName, setFilterName] = useState("")
  const [filterHouse, setFilterHouse] = useState("gryffindor")

  useEffect(() => {
    getDataApi(filterHouse).then((dataFromApi) => {
      setDataCharacters(dataFromApi);
    })
  }, [filterHouse]);

  const handleFilterName = (ev) => {
    const inputValue = ev.target.value;
    setFilterName(inputValue);
  }

  const handleFilterHouse = (ev) => {
    const inputValue = ev.target.value;
    setFilterHouse(inputValue);
  }

  return (
    <div className="App">
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
        <form>
          <label>Busca por personaje: </label>
          <input value={filterName} onChange={handleFilterName}></input>
          <label>Selecciona las casa: </label>
          <select onChange={handleFilterHouse} value={filterHouse}>
            <option value="gryffindor" >Gryffindor</option>
            <option value="slytherin">Slytherin</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="hufflepuff">Hufflepuff</option>
          </select>
        </form>

        <CharacterList characters={dataCharacters} filterName={filterName}></CharacterList>

      </main>

    </div>
  );
}

export default App;
