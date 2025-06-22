import { useState } from 'react';
import './App.css';
import TitleScreen from './components/TitleScreen';
import CharacterCreator from './components/CharacterCreator';

function App() {
  const [screen, setScreen] = useState('title');
  const [characterData, setCharacterData] = useState(null);

  const handleNewGame = () => {
    setScreen('character');
  };

  const handleCharacterCreate = (character) => {
    setCharacterData(character);
    console.log("Character created", character); // console check
    // setScreen('game');
  };

  return (
    <div className='App'>
      {screen === 'title' && <TitleScreen onNewGame={handleNewGame} />}
      {screen === 'character' && <CharacterCreator onCharacterCreator={handleCharacterCreate} />}
    </div>
  );
}

export default App;