import { useEffect, useState } from 'react';
import '../styles/App.scss';
import getDataApi from '../services/Api';
import CharacterList from './CharacterList';


function App () {
  const [dataCharacters, setDataCharacters] = useState([])
  const [filterName, setFilterName] = useState("")

  useEffect(() => {

    getDataApi().then((dataFromApi) => {
      setDataCharacters(dataFromApi);

    })
  }, []);

  const handleFilterName = (characters) => {
    const inputValue = characters.target.value;
    setFilterName(inputValue);

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
          <select>
            <option>Gryffindor</option>
            <option>Slytherin</option>
            <option>Ravenclaw</option>
            <option>Hufflepuff</option>
          </select>
        </form>

        <CharacterList characters={dataCharacters} filterName={filterName}></CharacterList>

      </main>

    </div>
  );
}

export default App;
