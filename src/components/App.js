import { useEffect } from 'react';
import '../styles/App.scss';
import getDataApi from './services/Api';



function App () {

  useEffect(() => {

    getDataApi().then((dataFromApi) => {
      console.log(dataFromApi);
    })
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Harry Potter</h1>
      </header>
      <main>
        <form>
          <label>Busca por personaje: </label>
          <input></input>
          <label>Selecciona las casa: </label>
          <select>
            <option>Gryffindor</option>
            <option>Slytherin</option>
            <option>Ravenclaw</option>
            <option>Hufflepuff</option>
          </select>
        </form>
        <ul>
        </ul>
      </main>

    </div>
  );
}

export default App;
