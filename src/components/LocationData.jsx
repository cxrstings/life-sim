import beds from './Beds';

const locations = {
    cityGate: {
        name: "City Gate",
        description: "The towering enterance to the city.",
        actions : [
            { label: "Talk to Guards", timeCost: 1 },
            { label: "Walk to Uncle's Car", timeCost: 5, nextLocation: "uncleCar" },
            { label: "Exit City", timeCost: 0, locked: true },
            { label: "Main Street", timeCost: 1, nextLocation: "mainStreet" },
            { label: "Wait", timeCost: 2880 }            
        ]
    },

    uncleCar: { // remove this soon
        name: "Uncle's Car",
        description: "Your uncle's car parked by the gate.",
        actions: [
            { label: "Talk to Uncle", timeCost: 1, nextLocation: "uncleCar" },
            { label: "Return to City Gate", timeCost: 5, nextLocation: "cityGate" },
            { label: "Uncle's House", timeCost: 5, nextLocation: "uncleHouse" }
        ]
    },

    mainStreet: {
        name: "Main Street",
        description: "The main road of the city.",
        actions : [
            { label: "City Gate", timeCost: 1, nextLocation: "cityGate" },
            { label: "First Street", timeCost: 1, nextLocation: "firstStreet" }
        ]
    },

    uncleHouse: {
        name: "Uncle's House",
        description: "1026 First Street.",
        subLocations: {
            porch: { name: "Porch",
                actions: [
                    { label: "Front Door", timeCost: 1, nextLocation: "uncleHouse.kitchen" },
                    { label: "Sidewalk", timeCost:1, nextLocation: "uncleHouse" }
                ]
             },
            kitchen: { name: "Kitchen",
                actions: [
                    { label: "Front Door", timeCost: 1, nextLocation: "uncleHouse.porch" },
                    { label: "Living Room", timeCost: 1, nextLocation: "uncleHouse.livingRoom" }
                ]
             },
            livingRoom: { name: "Living Room",
                actions: [
                    { label: "Uncle's Room", timeCost: 1, nextLocation: "uncleHouse.uncleRoom" },
                    { label: "Bathroom", timeCost: 1, nextLocation: "uncleHouse.bathroom" },
                    { label: "Bedroom", timeCost: 1, nextLocation: "uncleHouse.bedroom" },
                    { label: "Kitchen", timeCost: 1, nextLocation: "uncleHouse.kitchen" }
                ]
            },
            uncleRoom: { name: "Uncle's Room", 
                actions: [
                    { label: "Living Room", timeCost: 1, nextLocation: "uncleHouse.livingRoom" }
                ],
                subLocations: {
                    bed: {
                        name: `${beds.kingBed.name}`,
                        actions: beds.kingBed.actions
                    }
                }
            },
            bathroom: { name: "Bathroom",
                actions: [
                    { label: "Living Room", timeCost: 1, nextLocation: "uncleHouse.livingRoom" }
                ]
            },
            bedroom: { name: "Bedroom",
                actions: [
                    { label: "Living Room", timeCost: 1, nextLocation: "uncleHouse.livingRoom" },                 
                ],
                subLocations: {
                    bed: {
                        name: `${beds.basicBed.name}`,
                        actions: beds.basicBed.actions
                    }
                }
            }
        },
        actions: [
            { label: "Porch", timeCost: 0, nextLocation: "uncleHouse.porch" },
            { label: "First Street", timeCost: 1, nextLocation: "firstStreet" }
        ]
    },

    firstStreet: {
        name: "First Street",
        description: "First Street",
        actions: [
            { label: "Uncle's House", timeCost: 1, nextLocation: "uncleHouse" },
            { label: "Main Street", timeCost: 1, nextLocation: "mainStreet" }
        ]
    }
};

export const getLocationData = (locationKey) => {
    const parts = locationKey.split(".");
    let current = locations;

    for (const part of parts) {
        if (current.subLocations) {
            current = current.subLocations[part];
        } else {
            current = current[part];
        }

        if (!current) return undefined;
    }

    return current;
};

export default locations;