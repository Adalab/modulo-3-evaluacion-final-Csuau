import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import '../styles/App.scss';

import getDataApi from '../services/Api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetail from './CharacterDetail';

function App () {

  const [dataCharacters, setDataCharacters] = useState([])
  const [filterName, setFilterName] = useState("")
  const [filterHouse, setFilterHouse] = useState("gryffindor")

  useEffect(() => {
    getDataApi(filterHouse).then((dataFromApi) => {
      setDataCharacters(dataFromApi);
    })
  }, [filterHouse]);

  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:characterId', pathname);
  const characterId = dataPath !== null ? dataPath.params.characterId : '';
  const characterFound = dataCharacters.find((character) => {

    return character.id === characterId
  });



  return (
    <div >

      <Routes>
        <Route path='/' element={
          <>
            <header className="header">

              <h1 className='title'>Harry Potter</h1>
            </header>
            <main className='main'>
              <Filters
                filterName={filterName}
                setFilterName={setFilterName}
                filterHouse={filterHouse}
                setFilterHouse={setFilterHouse}
              />

              <CharacterList
                characters={dataCharacters}
                filterName={filterName}
              />
            </main>
          </>}
        />


        <Route path='/character/:characterId'
          element={
            <>
              <header className='headerDetail'></header>
              <main className='mainDetail'>
                <CharacterDetail character={characterFound} />
              </main>
            </>} />



      </Routes>





    </div>
  );
}

export default App;
