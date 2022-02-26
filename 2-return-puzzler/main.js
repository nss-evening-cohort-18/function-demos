const tacoFactory = () => {
    const newTaco = {}
    newTaco.tortilla = true
    newTaco.meat = true
    newTaco.onions = true
    newTaco.cilantro = true

    return newTaco
}

const tacoOne = tacoFactory()
const tacoTwo = tacoFactory()
const tacoThree = tacoFactory()

tacoThree.cilantro = false;

console.log(`Taco One has cilantro: ${tacoOne.cilantro}`)
console.log(`Taco Two has cilantro: ${tacoTwo.cilantro}`)
console.log(`Taco Three has cilantro: ${tacoThree.cilantro}`)