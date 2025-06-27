export const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

export const days = Array.from({ length: 28 }, (_, i) => i + 1);

// Game Starts July 11, 2998, 7:00 AM
let currentMonth = 7;
let currentDay = 11;
let currentYear = 2998;
let currentHour = 7;
let currentMinute = 0;

// Function to get formatted date and time
export function getCurrentDateTime() {
    const monthName = months[currentMonth - 1];
    const hour12 = currentHour % 12 || 12;
    const ampm = currentHour < 12 ? 'AM' : 'PM';
    const formattedMinute = String(currentMinute).padStart(2, '0');

    return `${monthName} ${currentDay}, ${currentYear} - ${hour12}:${formattedMinute} ${ampm}`;
}

// function to advance time
export function advanceTime(minutes) {
    currentMinute+= minutes;

    while (currentMinute >= 60) {
        currentMinute -= 60;
        currentHour++;
    }

    while (currentHour >= 24) {
        currentHour -= 24;
        currentDay++;
    }

    while (currentDay > 28) {
        currentDay -= 28;
        currentMonth++;
    }

    while (currentMonth > 12) {
        currentMonth -= 12;
        currentYear++;
    }
}