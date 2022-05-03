import useGetRequest from "../../useGetRequest";
import {useEffect, useState} from "react";
import Filters from "../Filters/Filters";
import Character, {CharacterType} from "../Character/Character";
import CharacterSkeleton from "../CharacterSkeleton/CharacterSkeleton";

export default function CharacterContainer() {
    const characters = useGetRequest(`https://thronesapi.com/api/v2/Characters`);

    const [filteredCharacters, setFilteredCharacters] = useState<CharacterType[]>([]);
    const [families, setFamilies] = useState<string[]>([])

    function getUniqueFamilies(): string[] {
        const families = characters.data?.map((character: CharacterType) => character.lastName);
        return families?.filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
    }

    function filterByFamily(familyName: string) {
        const filtered = characters.data?.filter((character: CharacterType) => familyName === character.lastName)
        setFilteredCharacters(filtered)
    }

    function resetFilter() {
        setFilteredCharacters(characters.data)
    }

    useEffect(() => {
        console.log('fetching characters')
        characters.execute();
    }, [])

    useEffect(() => {
        console.log('updating families')
        setFamilies(getUniqueFamilies())
        setFilteredCharacters(characters.data)
    }, [characters.isLoading])

    return (
        <>
            {characters.error && (
                <p>Seven hells, the maesters could not find any records</p>
            )}
            <Filters families={families} filterByFamily={filterByFamily} resetFilter={resetFilter}/>
            {characters.isLoading ? (
                <CharacterSkeleton/>
            ):(
                <div className="characters">
                    {filteredCharacters?.map((character: CharacterType) =>
                        <Character character={character} key={character.id}/>)}
                </div>
            )}
        </>
    )
}
