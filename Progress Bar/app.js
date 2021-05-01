let progressBar =  document.querySelector('#done')
let startButton = document.querySelector('#start')
let resetButton = document.querySelector('#reset')

startButton.addEventListener('click', () =>{
    for(let i = 0; i <= 100; i++){
        progressBar.style.width = `${i * 4}px`
    }
})

resetButton.addEventListener('click', () =>{
    for(let i = 100; i >= 0; --i){
        let j = i / 4
        progressBar.style.width = `${j}px`
    }
    progressBar.innerHTML = ''
    progressBar.style.width = '0px'
})
