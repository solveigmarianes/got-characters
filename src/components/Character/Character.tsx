import {useState} from "react";
import './Character.scss'

export type CharacterType = {
    id: number,
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

    if (isOpen) {
        console.log(JSON.stringify(character))
    }

    return (
        <div className="character">
            <button onClick={() => setOpen(!isOpen)}>
                <h3>{character.fullName}</h3>
                {isOpen ? <i className="bi bi-chevron-down"/> : <i className="bi bi-chevron-right"/>}
            </button>
            {isOpen &&
                <div className="character-details">
                    <dl>
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
