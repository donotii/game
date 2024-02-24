function scroll() {
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