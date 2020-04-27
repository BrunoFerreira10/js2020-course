let main = document.querySelector('[wm-flappy]')
let bird = document.createElement('img')
let points = 0

let gameOver = false;

function vxToNumber(vx){
    let number = vx.replace('vh','')
    number = number.replace('vw','')
    return (number * 1)
}

bird.moveDown = function(step) {    
    if(vxToNumber(bird.style.top) < 100 - 2 - step)
        this.style.top = `${vxToNumber(bird.style.top) + step}vh`
}

bird.moveUp = function(step, stepTime, steps) {
    const move = (step, stepTime, steps) => {
        if(vxToNumber(bird.style.top) > step)  
            if(!gameOver)
            this.style.top = `${vxToNumber(bird.style.top) - step}vh`   
        if(steps > 0){
            setTimeout(() => move(step, stepTime, steps - 1),stepTime)
        }
    }
    
    move(step, stepTime, steps -1)
}

document.onkeydown = event => {    
    bird.moveUp(1,15,10)    
}

function generateObstacles(){
    
    let positionX = 0;
    let positionY = 0;
    let upperPipe  = document.createElement('div')
    let bottomPipe  = document.createElement('div')
    let upperBorder  = document.createElement('div')
    let bottomBorder  = document.createElement('div')

    upperPipe.setAttribute('wm-obstacle','')    
    upperPipe.setAttribute('wm-upper-pipe','')
    upperPipe.setAttribute('cleared',false)
    
    bottomPipe.setAttribute('wm-obstacle','')    
    bottomPipe.setAttribute('wm-bottom-pipe','')

    upperBorder.setAttribute('wm-obstacle','')    
    upperBorder.setAttribute('wm-upper-border','')

    bottomBorder.setAttribute('wm-obstacle','')    
    bottomBorder.setAttribute('wm-bottom-border','')

    positionX = 100;
    positionY = Math.random() * 0.6 + 0.4 
    positionY = Math.round(positionY * 100) - 20
    
    upperPipe.style.top = `0vh`    
    upperPipe.style.height = `${positionY - 2}vh`   
    upperPipe.style.left = `${positionX+0.5}vw`    
    upperPipe.style.width = `5vw` 
    upperPipe.style.borderTop = 'none' 
    upperPipe.style.borderBottom = 'none' 

    upperBorder.style.top = `${positionY - 2}vh`
    upperBorder.style.height = `2vh`
    upperBorder.style.left = `${positionX}vw`
    upperBorder.style.width = `6vw`
    
    bottomPipe.style.top = `${positionY + 15 + 2}vh`    
    bottomPipe.style.height = `${100 - positionY - 10 - 2}vh`    
    bottomPipe.style.left = `${positionX+0.5}vw`    
    bottomPipe.style.width = `5vw`
    bottomPipe.style.borderTop = 'none'
    bottomPipe.style.borderBottom = 'none'

    bottomBorder.style.top = `${positionY + 15}vh`
    bottomBorder.style.height = `2vh`
    bottomBorder.style.left = `${positionX}vw`
    bottomBorder.style.width = `6vw`

    main.appendChild(upperPipe)
    main.appendChild(bottomPipe)
    main.appendChild(upperBorder)
    main.appendChild(bottomBorder)
}

function moveObstacles(step){
    const obstacles = document.querySelectorAll('[wm-obstacle]')
    obstacles.forEach(obstacle => {
        const positionX = vxToNumber(obstacle.style.left)
        obstacle.style.left = `${positionX - step}vw`    
        
        if(positionX < -15){
            main.removeChild(obstacle)
        }
    })
}

function checkCrash(){
    let obstacles = document.querySelectorAll('[wm-upper-border]')
    obstacles.forEach(obstacle => {
        if(vxToNumber(obstacle.style.left) < vxToNumber(bird.style.left) + 2
            && vxToNumber(obstacle.style.left) > vxToNumber(bird.style.left) - 6){                
            if(vxToNumber(bird.style.top) <= vxToNumber(obstacle.style.top) + 2){
                gameOver = true
            }
            if(vxToNumber(bird.style.top) + 2 >= vxToNumber(obstacle.style.top) + 17){
                gameOver = true
            }  
        }
        
        if(!obstacle.getAttribute('cleared'))
            if(vxToNumber(obstacle.style.left) < vxToNumber(bird.style.left) - 12){
                points++
                obstacle.setAttribute('cleared', true)
                document.querySelector('#points-counter').innerHTML = points
            }



    })
    
}

function mainLoop(){    
    this.index++ || (this.index = 1)

    if(this.index > 1000)
        this.index = 1;

    if(this.index % 5 == 0){      
        bird.moveDown(0.7)  
    }    
        
    if(this.index % 500 == 0)
        generateObstacles()

    if(this.index % 5 == 0)
        moveObstacles(0.5)  
        
     checkCrash()   
    
}

bird.id = 'bird'
bird.src = './imgs/passaro.png'
bird.style.height = '2vh'
bird.style.left = '50vw'
bird.style.top = '50vh'

main.style.position = 'relative'
main.appendChild(bird)

setInterval(() => {
    if(!gameOver)
        mainLoop()
}, 1)