import { Link } from 'react-router-dom';

function CharacterCard (props) {
    return (
        <li className='characterCard'>
            <Link to={`/character/${props.character.id}`}>
                <img className='littleImg'
                    src={props.character.image}
                    alt={`Foto de ${props.character.name}`}
                    title={`Foto de ${props.character.name}`}></img>
                <h4 >{props.character.name}</h4>
                <p >{props.character.species}</p>
            </Link>
        </li>
    )
}
export default CharacterCard;