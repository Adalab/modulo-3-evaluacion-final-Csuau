const getDataApi = (filterHouse) => {

    const dictionary = {
        male: "masculino",
        female: "femenino",
    }



    return fetch(`http://hp-api.herokuapp.com/api/characters`)
        .then(response => response.json())
        .then(data => {
            const _species = []
            data.forEach(({ species }) => {
                if (!_species.includes(species)) {
                    _species.push(species)
                }

            })
            console.log(_species);

            return []
        })
}

export default getDataApi;