function characterList (props) {


    const characterElements = props.characters.map((characters) => {
        return (
            <li>
                <a href="#">
                    <img
                        className=""
                        src={characters.image}
                        alt={`Foto de ${characters.name}`}
                        title={`Foto de ${characters.name}`}></img>
                    <h4 class="card__title">{characters.name}</h4>
                    <p class="card__description">{characters.species}</p>
                </a>
            </li>)
    })
    return (
        <section>
            <ul>
                {characterElements}
            </ul>
        </section>)
}
export default characterList;