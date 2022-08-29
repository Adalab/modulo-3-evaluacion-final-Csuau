import getTranslation from "../I18n/Es"

const getDataApi = (filterHouse) => {

    return fetch(`http://hp-api.herokuapp.com/api/characters/house/${filterHouse}`)
        .then(response => response.json())
        .then(data => {

            const dataClean = data.map((character, id) => {
                return {
                    id: id.toString(),
                    image: character.image || "https://pbs.twimg.com/media/El-LN4gW0AARLEs.jpg",
                    name: character.name,
                    species: getTranslation(character.species),
                    gender: getTranslation(character.gender),
                    house: character.house,
                    status: getTranslation(character.alive ? "alive" : "dead"),
                    alternate_names: character.alternate_names,
                    alive: character.alive,


                }
            })
            return dataClean
        })
}

export default getDataApi;