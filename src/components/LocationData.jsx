const locations = {
    cityGate: {
        name: "City Gate",
        description: "The towering enterance to the city.",
        actions : [
            { label: "Talk to Guards", timeCost: 1, nextLocation: "cityGate" },
            { label: "Walk to Uncle's Car", timeCost: 5, nextLocation: "uncleCar" },
            { label: "Exit City", timeCost: 0, locked: true },
            { label: "Main Street", timeCost: 1, nextLocation: "mainStreet" }            
        ]
    },
    uncleCar: {
        name: "Uncle's Car",
        description: "Your uncle's car parked by the gate.",
        actions: [
            { label: "Talk to Uncle", timeCost: 1, nextLocation: "uncleCar" },
            { label: "Return to City Gate", timeCost: 5, nextLocation: "cityGate" }
        ]
    },
    mainStreet: {
        name: "Main Street",
        description: "The main road of the city.",
        actions : [
            { label: "City Gate", timeCost: 1, nextLocation: "cityGate" }
        ]
    }
};

export default locations;