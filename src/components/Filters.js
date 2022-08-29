import '../styles/App.scss';

function Filters ({ filterName, setFilterName, filterHouse, setFilterHouse }) {

    const handleFilterName = (ev) => {
        ev.preventDefault();
        const inputValue = ev.target.value;
        setFilterName(inputValue);
    }

    const handleFilterHouse = (ev) => {
        const inputValue = ev.target.value;
        setFilterHouse(inputValue);
    }

    const handleReset = (ev) => {
        ev.preventDefault();
        setFilterName('');
        setFilterHouse("gryffindor");
    }

    return (<form className="main_form ">

        <label>Busca por personaje: </label>
        <input className='main_textForm' value={filterName} onChange={handleFilterName}></input>
        <label>Selecciona las casa: </label>
        <select className='main_textForm' onChange={handleFilterHouse} value={filterHouse}>
            <option value="gryffindor" >Gryffindor</option>
            <option value="slytherin">Slytherin</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="hufflepuff">Hufflepuff</option>
        </select>
        <button className="resetButton" onClick={handleReset}>
            <i className="trashIcon fa-solid fa-trash-can"> </i> Reset
        </button>
    </form>)


}
export default Filters