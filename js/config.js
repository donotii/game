const canvas = document.getElementById('game')
const c = canvas.getContext('2d')

canvas.width = 896
canvas.height = 544

world = 2

scrollx = -26 * 32 + canvas.width/2
scrolly = -95 * 32 + canvas.height/2
name = "lola"
stepss = 0
ste = 0
vitesse_0 = 2.5 
vitesse = vitesse_0
velocity = {
    x:0,
    y:0
}
idle = 2
cine = false
changeable = false
pipi = 0

const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
    up: {
        pressed: false,
    },
    down: {
        pressed: false,
    },
    kee: {
        pressed: false,
    }
}

var elem = document.getElementById("game");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/**var audio = new Audio('sprite/foot.mp3');
var ost = new Audio('sprite/ost.mp3');**/

const playerimg = new Image()
playerimg.src = "content/img/walk2.png";

const mapimg = new Image()
mapimg.src = "content/img/map1.png";

const mapimg1= new Image()
mapimg1.src = "content/img/premier.png";

const epou= new Image()
epou.src = "content/img/epou.png";



/*fps*/
let msPrev = window.performance.now()
const fps = 60
const msPerFrame = 1000 / fps
let frames = 0