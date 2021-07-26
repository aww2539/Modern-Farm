import { createPlan } from "./plan.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"

const yearlyPlan = createPlan()
const cornSeed = createCorn()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const asparagusSeed = createAsparagus()
const wheatSeed = createWheat()
const potatoSeed = createPotato()

addPlant(soybeanSeed)
addPlant(wheatSeed)
const testPlant = usePlants()
console.log(testPlant)

