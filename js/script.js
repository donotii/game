class Player {
    constructor() {
        this.width = 21 * 2
        this.height = 31 * 2
        this.position = {
            x: (canvas.width / 2) - (this.width / 2),
            y: (canvas.height / 2) - (this.height / 2) + 30,
        }
    }
    draw() { 
        if (velocity.x == 0 && velocity.y == 0 ) {
            switch (idle) {
                case 1:
                    c.drawImage(playerimg, this.width*0, this.height*0, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
                    break
                case 2:
                    c.drawImage(playerimg, this.width*0, this.height*1, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
                    break
                case 3:
                    c.drawImage(playerimg, this.width*0, this.height*2, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
                    break
                case 4:
                    c.drawImage(playerimg, this.width*0, this.height*3, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
                    break
            }
        }
        else {
            if (velocity.x > 0) {
                c.drawImage(playerimg, this.width*stepss, this.height*2, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
                idle = 3
            }
            else if (velocity.x < 0) {
                c.drawImage(playerimg, this.width*stepss, this.height*3, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
                idle = 4
            }
            if (velocity.y > 0 && velocity.x == 0) {
                c.drawImage(playerimg, this.width*stepss, this.height*0, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
                idle = 1
            }
            else if (velocity.y < 0 && velocity.x == 0) {
                c.drawImage(playerimg, this.width*stepss, this.height*1, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
                idle = 2
            }
        }
        
    }

    update() {
        this.draw()  
    }
}

class Player_hitbox {
    constructor() {
        this.width = 21 * 2 / 1.4
        this.height = 31 * 2 - 34
        this.position = {
            x: (canvas.width / 2) - (this.width / 2),
            y: (canvas.height / 2) - (this.height / 2) + 46,
        }
    }
    draw() { 
       
        
    }

    update() {
        this.draw()  
    }
}

class Colli {
    constructor() {
        this.width = 32
        this.height = 32
        this.position = {
            x:600,
            y:300
        }
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        scrollupd(this, 7*32, 3*32)
        collis(this, player_h)        
    }

}

class Map {
    constructor() {
        this.width = 1536
        this.height = 576
        this.position = {
            x:0,
            y:0
        }
    }
    draw() {
        c.drawImage(mapimg, 0, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        scrollupd(this, 0, 0)

    }
}

const player = new Player()
const player_h = new Player_hitbox()
const map = new Map()
const colli = new Colli()

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = '#17011f'
    c.fillRect(0, 0, canvas.width, canvas.height)
    map.update()
    colli.update()
    player.update()
    player_h.update()
    
    
    scroll()
    vitesse = (velocity.x != 0 && velocity.y != 0) ? vitesse = 1.2 : vitesse = vitesse_0;
    
}
animate()

function repeatWithDelay(delay) {
  setTimeout(function() {
    if (stepss < 3) {
        stepss += 1
    }
    else if (stepss === 3) {
        stepss = 0
    }
    repeatWithDelay(delay);
  }, delay);
}
repeatWithDelay(225);


