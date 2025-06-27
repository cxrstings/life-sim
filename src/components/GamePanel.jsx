import { useState } from 'react';
import npcData from './NPCData';
import { advanceTime } from './Calendar';
import beds from './Beds';
import placedObjects from './PlacedObjects';

function GamePanel({ location, currentLocation, setCurrentLocation, setGameTick }) {
    const { name, description, actions } = location;
    const presentNPCs = Object.values(npcData).filter(npc => npc.location === currentLocation);

    const [activeObjectId, setActiveObjectId] = useState(null);
    const objectsInRoom = placedObjects.filter(obj => obj.location === currentLocation);
    const bedsInRoom = objectsInRoom.filter(obj => obj.type === "bed");

    const handleAction = (action) => {
        if (action.locked) return;
        if (action.timeCost) {
            advanceTime(action.timeCost);
        }
        if (action.nextLocation) {
            setCurrentLocation(action.nextLocation);
        }

        setGameTick(prev => prev + 1);
    };

    const handleSleep= (timeCost) => {
    advanceTime(timeCost);
    setGameTick(prev => prev + 1);
};


    return (
        <div style={{ flex: 1, padding: '1rem' }}>
            <h2>{name}</h2>
            <img src="https://via.placeholder.com/400x200" alt={name} />
            <p>{description}</p>

            <h3>NPCs in this area:</h3>
            <ul>
                {presentNPCs.map(npc => (
                    <li key={npc.id}>{npc.name}</li>
                ))}
            </ul>

            <h3>Interactable Objects:</h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {bedsInRoom.map((bedObj) => {
                    const bed = beds[bedObj.bedId];
                    const isActive = activeObjectId === bedObj.id;

                    return (
                        <li key={bedObj.id}>
                            <button onClick={() => setActiveObjectId(isActive ? null : bedObj.id)}>
                                {bed.name}
                            </button>

                            {isActive && (
                                <ul>
                                {bed.actions.map((action, index) => {
                                    const hours = Math.floor((action.timeCost || 0) / 60);
                                    const minutes = (action.timeCost || 0) % 60;
                                    const formattedTime = `${hours}:${String(minutes).padStart(2, '0')}`;

                                    return (
                                        <li key={index} style={{ listStyle: 'none' }}>
                                            <button onClick={() => handleSleep(action.timeCost)}>
                                                {action.label} <span style={{ color: 'red' }}>
                                                    ({formattedTime})
                                                </span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                            )}
                        </li>
                    );
                })}
            </ul>

            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {actions.map((action, index) => {
                    const hours = Math.floor((action.timeCost || 0) / 60);
                    const minutes = (action.timeCost || 0) % 60;
                    const formattedTime = `${hours}:${String(minutes).padStart(2, '0')}`;

                    return (
                        <li key={index}>
                            <button onClick={() => handleAction(action)} disabled={action.locked}>
                                {action.label} <span style={{ color: 'red' }}>
                                    ({action.locked ? 'locked' : formattedTime})
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default GamePanel;