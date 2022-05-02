import React, {useEffect, useState} from "react";
import useGetRequest, {ApiResponse} from "./useGetRequest";
import {CharacterType} from "./components/Character/Character";

export const CharacterContext = React.createContext<ApiResponse>({
    isLoading: false,
    data: null,
    execute: () => null
})

interface ProviderProps {
    children: React.ReactNode
}

function CharacterDataProvider({children}: ProviderProps) {
    const characters = useGetRequest(`https://thronesapi.com/api/v2/Characters`);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    useEffect(() => {
        characters.execute();
    }, [])

    function getUniqueFamilies(): string[] {
        const families = characters.data?.map((character: CharacterType) => character.family);
        return families.filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
    }

    function getByFamily(familyName: string) {
        const filtered = characters.data?.filter((character: CharacterType) => familyName === character.family)
        setFilteredCharacters(filtered)
    }

    const contextValue = {
        ...characters,
        filteredCharacters,
        getUniqueFamilies,
        getByFamily
    }

    return (
        <CharacterContext.Provider value={contextValue}>
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterDataProvider
