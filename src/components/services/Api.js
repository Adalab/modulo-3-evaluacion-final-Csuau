const getDataApi = () => {
    return fetch("https://hp-api.herokuapp.com/api/characters")
        .then(response => response.json())
        .then(data => {

            const dataClean = data.map(({ image, name, species }, id) => {
                return {
                    id,
                    photo: image,
                    name,
                    species,
                }
            })
            return dataClean
        })
}

export default getDataApi;