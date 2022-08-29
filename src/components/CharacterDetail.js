import { Link } from 'react-router-dom';
import IconStatus from './IconStatus';

function CharacterDetail (props) {



    return (
        <section style={{
            '--house': `${props.character.house}`
        }}>
            <Link to={'/'}>Volver al listado</Link>
            <img
                src={props.character.image}
                alt={`Foto de ${props.character.name}`}
                title={`Foto de ${props.character.name}`}></img>
            <ul>
                <li>{props.character.name} </li>
                <li>Estatus: {props.character.status} <IconStatus status={props.character.alive} /> </li>
                <li>Especie: {props.character.species}</li>
                <li>Género: {props.character.gender}</li>
                <li>Casa: {props.character.house}</li>
                {
                    props.character.alternate_names.lenght > 0 && (
                        <li>Nombre alternativo: {props.character.alternate_names.toString()}</li>
                    )
                }

            </ul>

        </section >)
}
export default CharacterDetail;