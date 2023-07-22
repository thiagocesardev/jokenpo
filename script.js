const playhuman = (humanChoice) => {
    console.log(humanChoice)


    console.log('retorno' + playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
  
    return choices[randomNumber]
}


const playTheGame = (human, machine) =>{
    console.log ('Humano: ' + human + 'Maquina: ' + machine)
}