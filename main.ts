input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Zahl += -1
    I2C_LCD1602.ShowNumber(Zahl, 0, 0)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (Zahl < Zufall) {
        basic.showIcon(IconNames.ArrowNorth)
    } else if (Zahl > Zufall) {
        basic.showIcon(IconNames.ArrowSouth)
    } else {
        basic.showIcon(IconNames.Happy)
        I2C_LCD1602.ShowNumber(Zahl, 0, 0)
        basic.setLedColor(0x00ff00)
        I2C_LCD1602.clear()
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Zahl += 1
    I2C_LCD1602.ShowNumber(Zahl, 0, 0)
})
let Zahl = 0
let Zufall = 0
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
Zufall = randint(1, 9)
Zahl = 5
basic.showNumber(Zufall)
I2C_LCD1602.ShowNumber(Zufall, 0, 1)
basic.pause(1000)
I2C_LCD1602.clear()
basic.clearScreen()
