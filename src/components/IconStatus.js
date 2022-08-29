import dead from '../images/dead.png';
import alive from '../images/alive.png';
import '../styles/App.scss'
const IconStatus = ({ status }) => {
    if (status) {
        return <img className='statusIcon' src={alive} alt="vivo" />
    }

    return <img className='statusIcon' src={dead} alt="muerto" />

}
export default IconStatus