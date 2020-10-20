input.onButtonPressed(Button.A, function () {
    if (échange == 0) {
        nombre1 += 1
        basic.showNumber(nombre1)
    }
    if (échange == 1) {
        nombre2 += 1
        basic.showNumber(nombre2)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    échange += 1
    if (échange == 2) {
        basic.showNumber(nombre1 + nombre2)
    }
})
let échange = 0
let nombre2 = 0
let nombre1 = 0
nombre1 = 0
nombre2 = 0
échange = 0
