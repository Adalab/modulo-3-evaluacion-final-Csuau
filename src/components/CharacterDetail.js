import { Link } from 'react-router-dom';
function CharacterDetail (props) {
    console.log(props);
    return (<section>
        <Link to={'/'}>
            <img
                src={props.character.image}
                alt={`Foto de ${props.character.name}`}
                title={`Foto de ${props.character.name}`}></img>
            <ul>
                <li>{props.character.name} </li>
                <li>Estatus: {props.character.status}</li>
                <li>Especie: {props.character.species}</li>
                <li>Género: {props.character.gender}</li>
                <li>Casa: {props.character.house}</li>
            </ul>
        </Link>
    </section >)
}
export default CharacterDetail;