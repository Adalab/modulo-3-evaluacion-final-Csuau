import CharacterCard from "./CharacterCard";

function CharacterList (props) {
    const characterElements = props.characters
        .filter((character) => {
            if (props.filterName) {
                return character.name.toLowerCase()
                    .includes(props.filterName.toLowerCase());
            }
            else {
                return character;
            }
        })


        .map((character) => {
            return (<CharacterCard key={character.id} character={character} />)
        })
    return (
        <section>
            <ul>
                {characterElements}
            </ul>
        </section>)
}
export default CharacterList;