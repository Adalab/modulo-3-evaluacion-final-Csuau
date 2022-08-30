import { Link } from 'react-router-dom';
import IconStatus from './IconStatus';

/*
import gryffindor from '../images/gryffindor.png';
import hafflepuff from '../images/hafflepuff.png';
import ravenclaw from '../images/ravenclaw.png';
import slytherin from '../images/slytherin.png';

const getHouseImg = (house) => {
    if (hafflepuff) {

    } else if () {

    } else if () {

    }

    return gryffindor
}*/

function CharacterDetail (props) {

    console.log(props)
    return (<>
        <Link to={'/'} className='linkReturn'>Volver al listado</Link>
        <section className='sectionDetail'>

            <img className='detailImg'
                src={props.character.image}
                alt={`Foto de ${props.character.name}`}
                title={`Foto de ${props.character.name}`}></img>
            <ul className='textDetail'>
                <li className='nameCardDetail'>{props.character.name} </li>
                <li>Estatus: {props.character.status} <IconStatus status={props.character.alive} /> </li>
                <li>Especie: {props.character.species}</li>
                <li>Género: {props.character.gender}</li>
                <li>Casa: {props.character.house}</li>
                {
                    props.character.alternate_names.length > 0 && (
                        <li>Nombre alternativo: {props.character.alternate_names.toString()}</li>

                    )
                }

            </ul>
            <img className='' src={`../images/${props.filterHouse}.png`} alt="house" />

        </section ></>
    )
}
export default CharacterDetail;