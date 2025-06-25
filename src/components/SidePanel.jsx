import { getCurrentDateTime } from './Calendar';

function SidePanel({ character }) {
    return (
        <div style={{ width: '300px', backgroundColor: '#f0f0f0', padding: '1rem', borderRight: '1px solid #ccc' }}>
            <h2>{character.firstName} {character.lastName}</h2>
            <img src="https://via.placeholder.com/150" alt="Character Portrait" />
            <p>{getCurrentDateTime()}</p>
            <p>Money: ${character.money}</p>
        </div>
    );
}

export default SidePanel;