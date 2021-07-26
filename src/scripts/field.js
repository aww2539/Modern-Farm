
const plantedSeeds = []

export const addPlant = (seed) => {
    return plantedSeeds.push(seed)
};

export const usePlants = () => {
    return plantedSeeds
}