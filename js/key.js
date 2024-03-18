window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.right.pressed = true
            break
        case 'q':
            keys.left.pressed = true
            break
        case 'z':
            keys.up.pressed = true
            break
        case 's':
            keys.down.pressed = true
            break
        case 'e':
            transitil()
        break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.right.pressed = false
            idles = true
            break
        case 'q':
            keys.left.pressed = false
            idles = true
            break
        case 'z':
            keys.up.pressed = false
            break
        case 's':
            keys.down.pressed = false
            break
        case 'e':
            keys.kee.pressed = false
        break
    }
})