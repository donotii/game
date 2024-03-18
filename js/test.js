const canvas = document.getElementById('game')
const c = canvas.getContext('2d')

canvas.width = 896
canvas.height = 544
const mapimg = new Image()
mapimg.src = "content/img/map1.png";
caca = 0 
fpsn = 0 

class Light {
    constructor(x, y, r, color) {
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
    }
    draw() {
      const gradient = c.createRadialGradient((this.radius) + this.position.x, (this.radius) + this.position.y, 0, (this.radius) + this.position.x, (this.radius) + this.position.y, this.radius);
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

const light = [

    new Light(8 * 32 + 10, 6*32, 100, 'rgba(255,255,255, 0.6')
    , new Light(10, 100, 50, 'blue')
]

laguioles = 1
  trio = 'https://web.archive.org/web/20160404152601if_/http://laguiole.tm.fr/photos/ambiance/ambiance-114.jpg'

  function plus() {
      laguioles++
  }

function animate() {
    window.requestAnimationFrame(animate)
    trio = "https://web.archive.org/web/20160404152601if_/http://laguiole.tm.fr/photos/ambiance/ambiance-" + laguioles + ".jpg"
    document.getElementById('laguiole').src = trio
    document.getElementById('zizi').innerHTML = laguioles
    
    
}
animate()

function repeatWithDelay(delay) {
  setTimeout(function() {
    

    repeatWithDelay(delay);
  }, delay);
}
repeatWithDelay(1000);

