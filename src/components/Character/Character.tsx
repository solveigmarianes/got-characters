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

    return (
        <div className="character">
            <button onClick={() => setOpen(!isOpen)}>
                <h3>{character.fullName}</h3>
            </button>
            {isOpen &&
                <div className="character-details">
                    <img className="character-image" src={character.imageUrl} alt={character.fullName}/>
                    <dl>
                        <dt>Title</dt>
                        <dd>{character.title}</dd>
                        <dt>Family</dt>
                        <dd>{character.family}</dd>
                    </dl>
                </div>
            }
        </div>
    )
}
