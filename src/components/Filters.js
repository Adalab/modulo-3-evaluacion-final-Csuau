

function Filters ({ filterName, setFilterName, filterHouse, setFilterHouse }) {

    const handleFilterName = (ev) => {
        const inputValue = ev.target.value;
        setFilterName(inputValue);
    }

    const handleFilterHouse = (ev) => {
        const inputValue = ev.target.value;
        setFilterHouse(inputValue);
    }


    return (<form>
        <label>Busca por personaje: </label>
        <input value={filterName} onChange={handleFilterName}></input>
        <label>Selecciona las casa: </label>
        <select onChange={handleFilterHouse} value={filterHouse}>
            <option value="gryffindor" >Gryffindor</option>
            <option value="slytherin">Slytherin</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="hufflepuff">Hufflepuff</option>
        </select>
    </form>)


}
export default Filters