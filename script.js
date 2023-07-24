const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}
const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    document.querySelector('#machine-choice').innerHTML = machine;

    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if ((human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')) {
        result.innerHTML = "Você ganhou!"
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
    } else {
        result.innerHTML = "Máquina ganhou!"
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}