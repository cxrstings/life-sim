import SidePanel from './SidePanel';
import GamePanel from './GamePanel';
import locations, { getLocationData } from './LocationData';

function GameScreen({ character, currentLocation, setCurrentLocation, gameTick, setGameTick }) {
    const locationData = getLocationData(currentLocation);
    
    return (
        <div style={{ display: 'flex', height:'100vh' }}>
            <SidePanel character={character} />
            <GamePanel
            location={locationData}
            currentLocation={currentLocation}
            setCurrentLocation={setCurrentLocation}
            gameTick={gameTick}
            setGameTick={setGameTick}
            />
        </div>
    );
}

export default GameScreen;