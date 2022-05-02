import React from 'react';
import logo from './got-logo.png';
import CharacterContainer from "./components/CharacterContainer/CharacterContainer";
import './App.scss';

function App() {
    return (
        <div className="App">
            <header className="header">
                <img src={logo} className="logo" alt="logo"/>
                <h1>Character Library</h1>
            </header>
            <main>
                <CharacterContainer/>
            </main>
            <footer>
                <p>Data source: <a href="https://thronesapi.com">Game of Thrones Character API</a></p>
                <p>Logo created by Cyanide Studio, distributed under Creative Commons License</p>
            </footer>
        </div>
    );
}

export default App;
