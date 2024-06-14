var winnerLoser = document.querySelector("div h1");
var player1 = document.querySelector("img.img1");
var player2 = document.querySelector("img.img2");


var player1Num = generateRandomNumber();
var player2Num = generateRandomNumber();

setImage(player1Num, player1);
setImage(player2Num, player2);

generateWinner(player1Num, player2Num);


function generateRandomNumber() {
    return (Math.floor(Math.random() * 6)) + 1;
}

function generateWinner(player1Num, player2Num){

    if (player1Num > player2Num) {
        winnerLoser.textContent = "🚩 Player 1 Wins!";
    } else if (player1Num < player2Num) {
        winnerLoser.textContent = "Player 2 Wins! 🚩";
    } else {
        winnerLoser.textContent = "It's a draw!";
    }

}

function setImage(num, player) {
    var imagePath = "./images/dice" + num + ".png";
    player.src = imagePath;
}
