/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Sep 2023
 * This program turns on and off an led connected to a breadboard
*/

// setup
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showIcon(IconNames.Happy)

// turn on LED
input.onButtonPressed(Button.A, function () {
  basic.showIcon(IconNames.Yes)
  pins.digitalWritePin(DigitalPin.P16, 1)
})

// turn off LED
input.onButtonPressed(Button.B, function () {
  basic.showIcon(IconNames.No)
  pins.digitalWritePin(DigitalPin.P16, 0)
})
