input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (ausgewählt == 0) {
        if (Auswahl > 1) {
            Auswahl += -1
        }
        basic.showNumber(Auswahl)
        I2C_LCD1602.ShowNumber(Auswahl, 0, 0)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    ausgewählt = 1
    basic.setLedColor(0x00ff00)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (ausgewählt == 0) {
        Auswahl += 1
    }
    basic.showNumber(Auswahl)
    I2C_LCD1602.ShowNumber(Auswahl, 0, 0)
})
function Intro () {
    I2C_LCD1602.ShowString("Errate meine Zahl XX", 0, 0)
    basic.pause(500)
    basic.clearScreen()
    I2C_LCD1602.clear()
    basic.pause(200)
}
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    PIN0 = 1
    basic.turnRgbLedOff()
    if (ausgewählt == 1) {
        basic.clearScreen()
        I2C_LCD1602.clear()
        Zahl = randint(0, Auswahl - 1)
    }
})
let Zahl = 0
let ausgewählt = 0
let Auswahl = 0
let PIN0 = 0
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.clear()
PIN0 = 1
Auswahl = 1
basic.showNumber(1)
I2C_LCD1602.ShowNumber(1, 0, 1)
Intro()
basic.forever(function () {
    if (ausgewählt == 1 && PIN0 == 1) {
        basic.showNumber(Zahl + 1)
        I2C_LCD1602.ShowNumber(Zahl + 1, 0, 0)
    }
})
