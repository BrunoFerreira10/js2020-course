function newElement(tagName, className) {
    const element = document.createElement(tagName)
    element.className = className
    return element
}

function Barrier(reverse = false) {
    this.element = newElement('div', 'barrier')

    const border = newElement('div', 'border')
    const body = newElement('div', 'body')
    this.element.appendChild(reverse ? body : border)
    this.element.appendChild(reverse ? border : body)

    this.setHeight = height => body.style.height = `${height}px`
}

function BarrierPair(height, open, x) {
    this.element = newElement('div', 'barrier-pair')

    this.top = new Barrier(true)
    this.bottom = new Barrier(false)

    this.element.appendChild(this.top.element)
    this.element.appendChild(this.bottom.element)

    this.ramdomOpen = () => {
        const topHeight = Math.random() * (height - open)
        const bottomHeight = height - open - topHeight
        this.top.setHeight(topHeight)
        this.bottom.setHeight(bottomHeight)
    }

    this.getX = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = x => this.element.style.left = `${x}px`
    this.getWidth = () => this.element.clientWidth

    this.ramdomOpen()
    this.setX(x)
}

function Barriers(height, width, open, distance, notifyPoint) {
    this.pairs = [
        new BarrierPair(height, open, width),
        new BarrierPair(height, open, width + distance),
        new BarrierPair(height, open, width + distance * 2),
        new BarrierPair(height, open, width + distance * 3)
    ]

    const step = 3;
    this.move = () => {
        this.pairs.forEach(pair => {
            pair.setX(pair.getX() - step)

            // When element leaves the game area
            if(pair.getX() < -pair.getWidth()) {
                pair.setX(pair.getX() + distance * this.pairs.length)
                pair.ramdomOpen()
            }

            const half = width / 2
            const halfCrossed = pair.getX() + step >= half && pair.getX() < half

            halfCrossed && notifyPoint()
        })
    }
}

function Bird(gameHeight) {
    let flying = false

    this.element = newElement('img', 'bird')
    this.element.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.element.style.bottom.split('px')[0])
    this.setY = y => this.element.style.bottom = `${y}px`

    window.onkeydown = event => flying = true
    window.onkeyup = event => flying = false

    this.move = () => {
        // debugger
        const newY = this.getY() + (flying ? 8 : -5)
        const maxHeight = gameHeight - this.element.clientHeight

        if(newY <= 0){
            this.setY(0)
        } else if (newY >= maxHeight) {
            this.setY(maxHeight)
        } else {
            this.setY(newY)
        }              
    }
    this.setY(gameHeight / 2)  
}

function Progress() {
    this.element = newElement('span','progress')
    this.updatePoints = points => {
        this.element.innerHTML = points
    }
    this.updatePoints(0)
}

function isOverlap(elementA, elementB){
    const a = elementA.getBoundingClientRect()
    const b = elementB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top
    return horizontal && vertical
}

function checkColision(bird, barriers){
    let collision = false

    barriers.pairs.forEach(pair => {
        if(!collision) {
            const top = pair.top.element
            const bottom = pair.bottom.element
            collision = isOverlap(bird.element, top) || isOverlap(bird.element, bottom)
        }
    })
    return collision
}

function FlappyBird() {
    let points = 0

    const gameArea = document.querySelector('[wm-flappy]')
    const height = gameArea.clientHeight
    const width = gameArea.clientWidth

    const progress = new Progress()
    const barriers = new Barriers(height, width, 200, 400, () => progress.updatePoints(++points))
    const bird = new Bird(height)

    gameArea.appendChild(progress.element)
    gameArea.appendChild(bird.element)
    barriers.pairs.forEach(pair => gameArea.appendChild(pair.element))

    this.start = () => {
        const timer = setInterval(() => {
            barriers.move()
            bird.move()

            if(checkColision(bird, barriers)){
                clearInterval(timer)
            }

        },20)
    }
}

new FlappyBird().start()


