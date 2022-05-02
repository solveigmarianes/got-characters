import {useContext} from "react";
import {CharacterContext} from "../../CharacterDataProvider";

export default function Filters() {
    const characters = useContext(CharacterContext);

    return (
        <ul className="filters">
        </ul>
    )

}
