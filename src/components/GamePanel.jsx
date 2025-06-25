import npcData from './NPCData';

function GamePanel({ location, currentLocation, setCurrentLocation }) {
    const { name, description, actions } = location;
    const presentNPCs = Object.values(npcData).filter(npc => npc.location === currentLocation);

    const handleAction = (action) => {
        if (action.locked) return;
        if (action.nextLocation) {
            setCurrentLocation(action.nextLocation);
        }
        // add time advance logic here
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

            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {actions.map((action, index) => (
                    <li key={index}>
                        <button onClick={ () => handleAction(action)} disabled={action.locked}>
                            {action.label} <span style={{ color: 'red' }}>({action.locked ? 'locked' : `0:${String(action.timeCost).padStart(2, '0')}`})</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GamePanel;