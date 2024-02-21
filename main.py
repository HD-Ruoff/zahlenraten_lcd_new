def on_button_a():
    global Zahl
    Zahl += -1
    basic.show_number(Zahl)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_ab():
    if Zahl < Zufall:
        basic.show_icon(IconNames.ARROW_NORTH)
    elif Zahl > Zufall:
        basic.show_icon(IconNames.ARROW_SOUTH)
    else:
        basic.show_icon(IconNames.HAPPY)
        basic.set_led_color(0x00ff00)
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

def on_button_b():
    global Zahl
    Zahl += 1
    basic.show_number(Zahl)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

Zahl = 0
Zufall = 0
Zufall = randint(1, 9)
Zahl = 5
basic.show_number(Zufall)
basic.pause(2000)
basic.clear_screen()

def on_forever():
    pass
basic.forever(on_forever)
