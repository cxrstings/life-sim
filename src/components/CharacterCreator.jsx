import { useState } from "react";
import { months, days } from './Calendar';

function CharacterCreator({ onCharacterCreator }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthMonth, setBirthMonth] = useState(1);
    const [birthDay, setBirthDay] = useState(1);

    // calculate birth year
    const birthYear = (birthMonth < 7 || (birthMonth === 7 && birthDay <= 11)) ? 2979 : 2980;
    const age = 2998 - birthYear; // edit this to calculate current age when time is added?

    const handleSubmit = () => {
        const character = {
            firstName,
            lastName,
            birthMonth,
            birthDay,
            birthYear,
            age,
            money: 0,
        };
        onCharacterCreator(character);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '5vh' }}>
            <h2>Character Creator</h2>

            <div>
                <label>
                    First Name:
                    <input
                    type="text"
                    placeholder="First"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>
                    Last Name:
                    <input 
                    type="text"
                    placeholder="Last"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </label>
            </div>

            <div>
                <label>
                    Birthday:
                    <br />
                    <select value={birthMonth} onChange={(e) => setBirthMonth(Number(e.target.value))}>
                        {months.map((month, i) => (
                            <option key={i} value={i + 1}>{month}</option>
                        ))}                        
                    </select>

                    <select value={birthDay} onChange={(e) => setBirthDay(Number(e.target.value))}>
                        {days.map((day) => (
                            <option key={day} value={day}>{day}</option>
                        ))}
                    </select>
                </label>
            </div>

            <br />

            <button onClick={handleSubmit}>Start Game</button>
        </div>
    )
};

export default CharacterCreator;