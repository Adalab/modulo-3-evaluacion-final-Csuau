const getDataApi = () => {
    return fetch("https://hp-api.herokuapp.com/api/characters")
        .then(response => response.json())
        .then(data => {

            const dataClean = data.map((character, id) => {
                return {
                    id,
                    image: character.image,
                    name: character.name,
                    species: character.species,
                }
            })
            return dataClean
        })
}

export default getDataApi;