
const plantedSeeds = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const plant of seed) {
            plantedSeeds.push(plant)
        }
    } else {
        plantedSeeds.push(seed)
    }
};

export const usePlants = () => {
    return plantedSeeds
}