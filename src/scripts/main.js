import { createPlan } from "./plan.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"

const yearlyPlan = createPlan()
const cornSeed = createCorn()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const asparagusSeed = createAsparagus()
const wheatSeed = createWheat()
const potatoSeed = createPotato()


plantSeeds(yearlyPlan)
const something = usePlants()
const somethingElse = harvestPlants(something)

console.log(usePlants())
console.log(somethingElse)