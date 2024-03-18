function scroll() {
    if (cine == false ) {
        if (keys.right.pressed == true && keys.left.pressed == false) {
            velocity.x = -vitesse
        }   
        else if (keys.left.pressed == true && keys.right.pressed == false) {
            velocity.x = vitesse
        }
        else {
            velocity.x = 0
        }  
        if (keys.up.pressed == true && keys.down.pressed == false) {
            velocity.y = vitesse
        }   
        else if (keys.down.pressed == true && keys.up.pressed == false) {
            velocity.y = -vitesse
        }    
        else {
            velocity.y = 0
        } 
    }   
    scrollx += velocity.x
    scrolly += velocity.y

}

function scrollupd(thi, posini, posinit) {
    thi.position.x = scrollx + posini
    thi.position.y = scrolly + posinit
}

function collis(thi, player) {
    if (player.position.x + player.width + vitesse > thi.position.x && player.position.x < thi.position.x + thi.width && player.position.y 
    < thi.position.y + thi.height && player.position.y + player.height > thi.position.y) {
            if (velocity.x < 0) {
                scrollx += vitesse
            }
            if (velocity.x > 0) {
                scrollx -= vitesse
            }

            if (velocity.y < 0) {
                scrolly += vitesse
            }
            if (velocity.y > 0) {
                scrolly -= vitesse
            }
        }
}

function collisr(thi, player) {
    if (player.position.x + player.width + vitesse > thi.position.x + scrollx && player.position.x < thi.position.x + scrollx + thi.width && player.position.y 
    < thi.position.y + scrolly + thi.height && player.position.y + player.height > thi.position.y + scrolly) {
            if (velocity.x < 0) {
                scrollx += vitesse
            }
            if (velocity.x > 0) {
                scrollx -= vitesse
            }

            if (velocity.y < 0) {
                scrolly += vitesse
            }
            if (velocity.y > 0) {
                scrolly -= vitesse
            }
        }
}

function transition() {
    console.log('caca')
    document.getElementById('transition').style.animation = "tran 5s"
    setTimeout(()=> {
        document.getElementById('transition').style.animation = "none"
      },7000);

}

function transitil() {
    if (changeable == true && pipi < 1) {
        pipi ++
        transition()
        cine = true
        setTimeout(()=> {
            cine = false
            pipi --
            world = 2
          },5000);
        }


}