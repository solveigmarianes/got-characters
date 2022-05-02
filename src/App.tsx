import React, {useContext, useEffect} from 'react';
import logo from './got-logo.png';
import './App.scss';
import useGetRequest from "./useGetRequest";
import Character, {CharacterType} from "./components/Character/Character";
import CharacterDataProvider, {CharacterContext} from "./CharacterDataProvider";

const Characters = () => {
    const characters = useContext(CharacterContext)
    return (
        <div className="houses">
            {characters.isLoading
                ? <p>Loading characters...</p>
                : characters.data.map((character: CharacterType) =>
                    <Character character={character} key={character.id}/>)}
        </div>
    )
}

function App() {
    const characters = useGetRequest(`https://thronesapi.com/api/v2/Characters`);

    useEffect(() => {
        characters.execute();
    }, [])

    return (
        <div className="App">
            <header className="header">
                <img src={logo} className="logo" alt="logo"/>
                <h1>Character Library</h1>
            </header>
            <main>
                <CharacterDataProvider>
                    <Characters />
                </CharacterDataProvider>
            </main>
            <footer>
                <p>Data source: <a href="https://thronesapi.com">Game of Thrones Character API</a></p>
                <p>Logo created by Cyanide Studio, distributed under Creative Commons License</p>
            </footer>
        </div>
    );
}

export default App;
