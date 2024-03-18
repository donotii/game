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

class Map {
    constructor() {
        this.width = 3456
        this.height = 3200
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

class Mapf {
    constructor() {
        this.width = 3456
        this.height = 3200
        this.position = {
            x:0,
            y:0
        }
    }
    draw() {
        c.drawImage(mapimg1, 0, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        scrollupd(this, 0, 0)
    }
}

class Trigger {
    constructor() {
        this.width = 32 * 4
        this.height = 32 * 1.8
        this.position = {
            x:0,
            y:0
        }
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        scrollupd(this, 22*32, 21*32)
         if (player.position.x + player.width + vitesse > this.position.x && player.position.x < this.position.x + this.width && player.position.y 
        < this.position.y + this.height && player.position.y + player.height > this.position.y) {
            changeable = true
        }
        else {
            changeable = false
       
        }
    }
}

class Light {
    constructor(x, y, r, color, f) {
      this.position = {
            x:x - r,
            y:y - r
        }
        this.positioni = {
            x:x - r,
            y:y - r
        }
        this.radius = r
        this.color = color
        this.flickering = f
    }
    draw() {
      const gradient = c.createRadialGradient((this.radius) + this.position.x, (this.radius) + this.position.y, 0, (this.radius) + this.position.x, (this.radius) + this.position.y, this.radius - this.flickering* Math.random());
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        c.fillStyle = gradient;
        c.fillRect(this.position.x, this.position.y, this.radius * 2, this.radius*2);
    }

    update() {
        this.draw()
        scrollupd(this,this.positioni.x ,this.positioni.y)
    }
}



class Epou {
    constructor() {
        this.width = 100 
        this.height = 132
        this.position = {
            x:0,
            y:0
        }
    }
    draw() {
        c.drawImage(epou, this.width*ste, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        scrollupd(this, 30*32, 84*32)
    }
}




    const collisionsMap = []

    for (let i = 0; i < collisions.length; i += mapwidth) {
      collisionsMap.push(collisions.slice(i, mapwidth + i))
    }

    class Boundary {
        constructor({position}) {
            this.position = position
            this.width = 32
            this.height = 32
        }
        draw() {
            collisr(this, player_h)  
        }
    }
    const boundaries = []

    collisionsMap.forEach((row, i) => {
      row.forEach((symbol, j) => {
        if (symbol === symbols)        
            boundaries.push(new Boundary({position: {
                x: j * 32 ,
                y: i * 32 
              }
            })
          )
      })
    })




    const collisionsMap1 = []

    for (let i = 0; i < collisions_forest.length; i += mapwidth1) {
      collisionsMap1.push(collisions_forest.slice(i, mapwidth1 + i))
    }

    class Boundary1 {
        constructor({position}) {
            this.position = position
            this.width = 32
            this.height = 32
        }
        draw() {
            collisr(this, player_h)
            
        }
    }
    const boundaries1 = []

    collisionsMap1.forEach((row, i) => {
      row.forEach((symbol, j) => {
        if (symbol === symbols)        
            boundaries1.push(new Boundary1({position: {
                x: j * 32 ,
                y: i * 32 
              }
            })
          )
      })
    })



const player = new Player()
const player_h = new Player_hitbox()
const map = new Map()
const mapf = new Mapf()
const trigger = new Trigger()
const epouz = new Epou()

const light = [

    new Light(8 * 32 + 10, 6*32, 100, 'rgba(255,255,255, 0.6', 10)
    , new Light(17*32, 12*32, 60, 'rgba(255,255,0, 0.2', 0)
]


function animatess() {
  window.requestAnimationFrame(animatess)

  const msNow = window.performance.now()
  const msPassed = msNow - msPrev

  if (msPassed < msPerFrame) return

  const excessTime = msPassed % msPerFrame
  msPrev = msNow - excessTime

  frames++


  c.fillStyle = '#17011f'
    c.fillRect(0, 0, canvas.width, canvas.height)
    map.update()
    player.update()
    mapf.update()
    epouz.update()

    
    player_h.update()

    
    scroll()
    trigger.update()
    vitesse = (velocity.x != 0 && velocity.y != 0) ? vitesse = 1.764214 : vitesse = vitesse_0;
    mapimg.src = (world == 1) ? mapimg.src = "content/img/map1.png" : mapimg.src = "content/img/map2.png";  
    map.width = (world == 1) ? 1728 : 3456
    map.height = (world == 1) ? 1088 : 3200

    

    if (world == 1) {
        light.forEach((light) => {
            light.update() 
    }) 
        boundaries.forEach((boundary) => {
        boundary.draw()
    })
    c.fillStyle = 'rgba(0, 0, 0, 0.4)'
    c.fillRect(0, 0, canvas.width, canvas.height)   
    }
    else if (world == 2) {
        boundaries1.forEach((boundary1) => {
            boundary1.draw()
        }) 
        c.fillStyle = 'rgba(0, 0, 0, 0)'
        c.fillRect(0, 0, canvas.width, canvas.height)

    }   
}


animatess()

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

function repeatWithDelays(delay) {
  setTimeout(function() {
    if (ste < 6) {
        ste += 1
    }
    else if (ste === 6) {
        ste = 0
    }
    repeatWithDelays(delay);
  }, delay);
}
repeatWithDelays(125);


