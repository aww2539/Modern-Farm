import { addPlant } from "./field.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createWheat } from "./seeds/wheat.js";
import { createPotato } from "./seeds/potato.js";

export const plantSeeds = (yearlyPlan) => {
    for (const column of yearlyPlan) {
        for (const plant of column) {
            switch (plant) {
                case "Asparagus":
                    addPlant(createAsparagus())
                    break;
            
                case "Corn":
                    addPlant(createCorn())
                    break;
            
                case "Potato":
                    addPlant(createPotato())
                    break;
            
                case "Soybean":
                    addPlant(createSoybean())
                    break;
            
                case "Sunflower":
                    addPlant(createSunflower())
                    break;
            
                case "Wheat":
                    addPlant(createWheat())
                    break;
            
                default:
                    break;
            }
        }
    }
}