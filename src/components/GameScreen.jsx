import SidePanel from './SidePanel';
import GamePanel from './GamePanel';
import locations from './LocationData';

function GameScreen({ character, currentLocation, setCurrentLocation }) {
    return (
        <div style={{ display: 'flex', height:'100vh' }}>
            <SidePanel character={character} />
            <GamePanel location={locations[currentLocation]} currentLocation={currentLocation} setCurrentLocation={setCurrentLocation} />
        </div>
    );
}

export default GameScreen;