function CharacterCard (props) {
    return (
        <li>
            <a href="">
                <img

                    src={props.character.image}
                    alt={`Foto de ${props.character.name}`}
                    title={`Foto de ${props.character.name}`}></img>
                <h4 >{props.character.name}</h4>
                <p >{props.character.species}</p>
            </a>
        </li>
    )
}
export default CharacterCard;