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
  const [characterFound, setCharacterFound] = useState(null)

  useEffect(() => {
    getDataApi(filterHouse).then((dataFromApi) => {
      setDataCharacters(dataFromApi);
    })
  }, [filterHouse]);

  const { pathname } = useLocation();

  useEffect(() => {
    const dataPath = matchPath('/character/:characterId', pathname);
    const characterId = dataPath !== null ? dataPath.params.characterId : '';
    setCharacterFound(null)

    if (characterId && dataCharacters.length > 0) {
      const _characterFound = dataCharacters.find((character) => {
        return character.id === characterId
      });
      setCharacterFound(_characterFound)
    }
  }, [pathname, dataCharacters])

  return (
    <>

      <Routes>
        <Route path='/' element={
          <>
            <header className="header">
              <h1 className='header_title'>Harry Potter</h1>
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
                {
                  characterFound && (
                    <CharacterDetail
                      character={characterFound}
                      filterHouse={filterHouse}
                    />
                  )
                }
              </main>
            </>} />
      </Routes>

      <footer className='footer'>
        <p className='textFooter'>HarryPotterCharacters © 2022</p>
      </footer>

    </>
  );
}

export default App;
