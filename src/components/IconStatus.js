import dead from '../images/dead.png';
import alive from '../images/alive.png';

const IconStatus = ({ status }) => {
    if (status) {
        return <img src={alive} alt="vivo" />
    }

    return <img src={dead} alt="muerto" />

}
export default IconStatus