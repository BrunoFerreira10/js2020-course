let main = document.querySelector('[wm-flappy]')
let bird = document.createElement('img')
let gameOver = false;

function pxToNumber(px){
    return px.replace('px','') * 1;
}

bird.setPositionY = function (position){    
    bird.style.top = `${position}px`
}

bird.moveDown = function(step) {    
    if(pxToNumber(bird.style.top) < innerHeight - 25 - step)
        this.setPositionY(pxToNumber(bird.style.top) + step)    
}

bird.moveUp = function(step, stepTime, steps) {
    const move = (step, stepTime, steps) => {
        if(pxToNumber(bird.style.top) > step)  
            if(!gameOver)
                this.setPositionY(pxToNumber(bird.style.top) - step)   
        if(steps > 0){
            setTimeout(() => move(step, stepTime, steps - 1),stepTime)
        }
    }
    
    move(step, stepTime, steps -1)
}

document.onkeydown = event => {    
    bird.moveUp(7,10,10)    
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
    
    bottomPipe.setAttribute('wm-obstacle','')    
    bottomPipe.setAttribute('wm-bottom-pipe','')

    upperBorder.setAttribute('wm-obstacle','')    
    upperBorder.setAttribute('wm-upper-border','')

    bottomBorder.setAttribute('wm-obstacle','')    
    bottomBorder.setAttribute('wm-bottom-border','')

    positionX = innerWidth - 50;
    positionY = Math.random() * 0.7 + 0.3 
    positionY = Math.round(positionY * innerHeight) - 50
    
    upperPipe.style.top = `0px`    
    upperPipe.style.height = `${positionY - 20 + 1}px`   
    upperPipe.style.left = `${positionX+10}px`    
    upperPipe.style.width = `100px` 
    upperPipe.style.borderTop = 'none' 

    upperBorder.style.top = `${positionY - 20}px`
    upperBorder.style.height = `20px`
    upperBorder.style.left = `${positionX}px`
    upperBorder.style.width = `120px`
    
    bottomPipe.style.top = `${positionY + 100 + 20 - 1}px`    
    bottomPipe.style.height = `${innerHeight - positionY - 100 - 20 + 1}px`    
    bottomPipe.style.left = `${positionX+10}px`    
    bottomPipe.style.width = `100px`
    bottomPipe.style.borderBottom = 'none'

    bottomBorder.style.top = `${positionY + 100}px`
    bottomBorder.style.height = `20px`
    bottomBorder.style.left = `${positionX}px`
    bottomBorder.style.width = `120px`

    main.appendChild(upperPipe)
    main.appendChild(bottomPipe)
    main.appendChild(upperBorder)
    main.appendChild(bottomBorder)
}

function moveObstacles(step){
    const obstacles = document.querySelectorAll('[wm-obstacle]')
    obstacles.forEach(obstacle => {
        const positionX = obstacle.style.left.replace('px','') * 1;

        obstacle.style.left = `${positionX - step}px`          

        if(positionX < -200){
            main.removeChild(obstacle)
        }
    })
}

function checkCrash(){
    let obstacles = document.querySelectorAll('[wm-upper-border]')
    obstacles.forEach(obstacle => {
        if(pxToNumber(obstacle.style.left) < pxToNumber(bird.style.left) + 34.73 
            && pxToNumber(obstacle.style.left) > pxToNumber(bird.style.left) - 120){                
            if(pxToNumber(bird.style.top) <= pxToNumber(obstacle.style.top) + 20){
                gameOver = true
                //console.log('GameOver');                
            }
            if(pxToNumber(bird.style.top) + 25 >= pxToNumber(obstacle.style.top) + 120){
                gameOver = true
                //console.log('GameOver');
            }  
        }             
    })
    
}

function mainLoop(){    
    this.index++ || (this.index = 1)

    if(this.index > 1000)
        this.index = 1;

    if(this.index % 5 == 0)        
        bird.moveDown(5)  
        
    if(this.index % 500 == 0)
        generateObstacles()

    if(this.index % 5 == 0)
        moveObstacles(5)  
        
     checkCrash()   
    
}

bird.id = 'bird'
bird.src = './imgs/passaro.png'
bird.style.height = '25px'
bird.style.left = `${Math.round(innerWidth / 2)}px`
bird.setPositionY(Math.round(innerHeight * 0.7));

main.style.position = 'relative'
main.appendChild(bird)

setInterval(() => {
    if(!gameOver)
        mainLoop()
}, 1)