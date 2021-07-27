

export const harvestPlants = (plantsArray) => {
    let newPlantArray = []
    for (const plant of plantsArray) {
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output; i+= 2) {
                newPlantArray.push(plant)
                
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                newPlantArray.push(plant)
            }
        }
    }

    return newPlantArray
}