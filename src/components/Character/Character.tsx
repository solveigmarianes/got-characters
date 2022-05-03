import {useState} from "react";
import './Character.scss'

export type CharacterType = {
    id: number,
    firstName: string,
    lastName: string,
    fullName: string,
    title?: string,
    family?: string,
    imageUrl?: string
}

export interface CharacterProps {
    character: CharacterType
}

export default function Character({character}: CharacterProps) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="character">
            <button onClick={() => setOpen(!isOpen)}>
                <h2>{character.fullName}</h2>
                {isOpen ? <i className="bi bi-chevron-down"/> : <i className="bi bi-chevron-right"/>}
            </button>
            {isOpen &&
                <div className="character-details">
                    <dl>
                        <dt>First name</dt>
                        <dd>{character.firstName}</dd>
                        <dt>Last name</dt>
                        <dd>{character.lastName}</dd>
                        <dt>Title</dt>
                        <dd>{character.title}</dd>
                        <dt>Family</dt>
                        <dd>{character.family}</dd>
                    </dl>
                    <div className="character-image">
                        <img src={character.imageUrl} alt={character.fullName}/>
                    </div>
                </div>
            }
        </div>
    )
}
