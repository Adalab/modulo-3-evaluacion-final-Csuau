import '../styles/App.scss'
import CharacterCard from "./CharacterCard";
import CharacterNotFound from "./CharacterNotFound";

function CharacterList (props) {
    const characterElements = props.characters
        .filter((character) => {
            if (props.filterName) {
                return character.name.toLowerCase()
                    .includes(props.filterName.toLowerCase());
            } else {
                return character;
            }
        })
        .map((character) => {
            return (<CharacterCard key={character.id} character={character} />)
        })
    return (
        <section>
            <ul className="characterList">
                {
                    characterElements.length > 0
                        ? characterElements
                        : <CharacterNotFound filterName={props.filterName} />
                }

            </ul>
        </section>)
}
export default CharacterList;