input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showIcon(IconNames.Heart)
basic.pause(200)
basic.showIcon(IconNames.Happy)
basic.clearScreen()
