import { useState } from 'react';
import './App.css';
import TitleScreen from './components/TitleScreen';
import CharacterCreator from './components/CharacterCreator';
import GameScreen from './components/GameScreen';

function App() {
  const [screen, setScreen] = useState('title');
  const [characterData, setCharacterData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState('cityGate');
  const [gameTick, setGameTick] = useState(0);

  const handleNewGame = () => {
    setScreen('character');
  };

  const handleCharacterCreate = (character) => {
    setCharacterData(character);
    console.log("Character created", character); // console check
    setScreen('game');
  };

  return (
    <div className='App'>
      {screen === 'title' && <TitleScreen onNewGame={handleNewGame} />}
      {screen === 'character' && <CharacterCreator onCharacterCreator={handleCharacterCreate} />}
      {screen === 'game' && <GameScreen
      character={characterData}
      currentLocation={currentLocation}
      setCurrentLocation={setCurrentLocation}
      gameTick={gameTick}
      setGameTick={setGameTick}
      />}
    </div>
  );
}

export default App;