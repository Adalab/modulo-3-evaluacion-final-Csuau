const getDataApi = () => {
    return fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
        .then(response => response.json())
        .then(data => {

            const dataClean = data.map((character, id) => {
                return {
                    id,
                    image: character.image || "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter",
                    name: character.name,
                    species: character.species,
                }
            })
            return dataClean
        })
}

export default getDataApi;