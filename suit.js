function rpsGame(yourChoice) {
    //membuat variabel human dan bot
    var humanChoice, botChoice;
    humanChoice = yourChoice.id // player memilih yg mengambil dari id
    // bot memiliki nilai yg random
    botChoice = numberToChoice(randToRpsInt())

    //  menampilkan yg dipilih
    results = decideWinner(humanChoice, botChoice); // [0,1] bot won
    // console.log(results)

    message = finalMessage(results);
    console.log(message)
    // menampilkan hasil dari mengambil id pada html 
    var resultDiv = document.getElementById('result')
    console.log(resultDiv)
    resultDiv.innerHTML = message.message


    rpsFrontEnd = (yourChoice.id, botChoice, message)
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3); // dikali 3 untuk mendapatkan nilai diantara 0-2
}

function numberToChoice(number) {
    return ['rock', 'scissors', 'paper'][number];
}

function decideWinner(yourChoice, botChoice) {
    var rpsDatabase = {
        'rock': {
            'scissors': 1,
            'rock': 0.5,
            'paper': 0
        },
        'scissors': {
            'paper': 1,
            'scissors': 0.5,
            'rock': 0
        },
        'paper': {
            'rock': 1,
            'paper': 0.5,
            'scissors': 0
        }

    }
    // yourscore menyimpan data 
    var yourScore = rpsDatabase[yourChoice][botChoice];
    var botScore = rpsDatabase[botChoice][yourChoice];

    return [yourScore, botScore]
}

function finalMessage([yourScore, botScore]) {
    if (yourScore < botScore) {
        return {
            'message': 'You Lost!',
            'color': 'red'
        };
    } else if (yourScore === botScore) {
        return {
            'message': "Draw",
            'color': 'yellow'
        }
    } else {
        return {
            'message': 'You Won',
            'color': 'green'
        }
    }
}

