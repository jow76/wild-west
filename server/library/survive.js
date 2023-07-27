function survive (request, response){
    const scenarios = [
        "You made it to the saloon. Congrats",
        "You died of dysentery.",
        "A snake gotcha!",
        "Your horse made it... you didn't.",
        "Your made it... your horse didn't.",
        "You found gold!",
        "You found oil!",
        "You didn't even attempt to cross the Oregon trail.",
    ];
    const randomNum = Math.floor(Math.random() * scenarios.length)
    const outcome = scenarios[randomNum]

    response.json(outcome)
}

module.exports = survive