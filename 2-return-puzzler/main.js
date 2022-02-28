const urTaco = {
    tortilla: true,
    meat: true,
    onions: true,
    cilantro: {
        amount: "normal"
    },
}

const tacoFactory = () => {
    const newTaco = {...urTaco} // ??? what is the "..." operator doing here?
    // const newTaco = {}
    // newTaco.tortilla = true
    // newTaco.meat = true
    // newTaco.onions = true
    // newTaco.cilantro = {
    //     amount: "normal"
    // }

    return newTaco
}

const tacoOne = tacoFactory()
const tacoTwo = tacoFactory()
const tacoThree = tacoFactory()

// ??? what's the difference between these two lines?
tacoThree.cilantro = {amount: "extra"};
// tacoThree.cilantro.amount = "extra"

console.log(`Taco One has: ${JSON.stringify(tacoOne.cilantro.amount)} cilantro`)
console.log(`Taco Two has: ${JSON.stringify(tacoTwo.cilantro.amount)} cilantro`)
console.log(`Taco Three has: ${JSON.stringify(tacoThree.cilantro.amount)} cilantro`)