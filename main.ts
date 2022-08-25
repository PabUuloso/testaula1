input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showLeds(`
        . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
    `)
})
basic.showString("Aperte A ou B")
basic.forever(function on_forever() {
    
})
