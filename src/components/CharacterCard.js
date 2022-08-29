import { Link } from 'react-router-dom';

function CharacterCard (props) {
    return (
        <li className='characterCard'>
            <Link to={`/character/${props.character.id}`}>
                <img className='littleImg'
                    src={props.character.image}
                    alt={`Foto de ${props.character.name}`}
                    title={`Foto de ${props.character.name}`}></img>
                <div className=''>
                    <h2 className='textBody textCharacterCard'> {props.character.name}</h2>
                    <p className='textCharacterCard'> {props.character.species}</p>
                </div>
            </Link>
        </li>
    )
}
export default CharacterCard;