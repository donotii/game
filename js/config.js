const canvas = document.getElementById('game')
const c = canvas.getContext('2d')

canvas.width = 896
canvas.height = 544

scrollx = 0
scrolly = 0
name = "laura"
stepss = 0
vitesse = 1.5
vitesse_0 = 1.5
velocity = {
    x:0,
    y:0
}

idle = 2

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
