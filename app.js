let p1Button = document.querySelector('#p1Button')
let p2Button = document.querySelector('#p2Button')
let resetButton = document.querySelector('#resetButton')
let roundSelect = document.querySelector('#roundChoice')
let p1Score = 0
let p2Score = 0
let winningScore = 3
let isGameOver = false
player1 = document.querySelector('#p1Score')
player2 = document.querySelector('#p2Score')
p1Button.addEventListener('click', function(e){
    if(!isGameOver){
        ++p1Score
        player1.innerText = `${p1Score}`
        if(p1Score === winningScore){
            isGameOver =  true;
            player1.classList.add('winner')
            player2.classList.add('loser')
        }
    }
})
p2Button.addEventListener('click', function(e){
    if(!isGameOver){
        ++p2Score
        player2.innerText = `${p2Score}`
        if(p2Score === winningScore){
            isGameOver = true;
            player2.classList.add('winner')
            player1.classList.add('loser')
        }
    }
})
resetButton.addEventListener('click', reset)
roundSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value)
    reset()
})
function reset(){
    p1Score = 0
    p2Score = 0
    player1.innerText = `${p1Score}`
    player2.innerText = `${p2Score}`
    isGameOver = false;
    player1.classList.remove('winner', 'loser')
    player2.classList.remove('winner', 'loser')
}