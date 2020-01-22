function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id // player memilih yg mengambil dari id

    botChoice = numberToChoice(randToRpsInt())

    results = decideWinner(humanChoice, botChoice);

    message = finalMessage(results); 
    console.log(message)

    rpsFrontEnd = (yourChoice.id, botChoice, message)
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3); // dikali 3 untuk mendapatkan nilai diantara 0-2
}

function numberToChoice(number) {
    return ['rock', 'scissors', 'paper'][number];
}
// ! ?
function decideWinner(yourChoice, botChoice) {
    let rpsDatabase = {
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
    let yourScore = rpsDatabase[yourChoice][botChoice];
    let botScore = rpsDatabase[botChoice][yourChoice];

    return [yourScore, botScore]
}

function finalMessage([yourScore, botScore]) {
    if (yourScore === botScore) {
        return {
            'message': 'You Lost!',
            'color': 'red'
        };
    } else if (yourScore === botScore) {
        return {
            'message': "You Tie!",
            'color': 'yellow'
        }
    } else {
        return {
            'message': 'You Won',
            'color': 'green'
        }
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // remove the image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');


    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150> style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML = "<h2 style='color: " + finalMessage['color'] + "font-size: 60px; padding:30px;'>" + finalMessage['message'] + "</h2>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150> style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"


    document.getElementById('gambar-suit').appendChild(humanDiv);
    document.getElementById('gambar-suit').appendChild(messageDiv);
    document.getElementById('gambar-suit').appendChild(botDiv);
}