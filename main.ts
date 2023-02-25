let y = 0
let x = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
let brojac = 0
for (let index = 0; index < 100; index++) {
    x = randint(0, 4)
    y = randint(0, 4)
    led.plot(x, y)
    basic.pause(100)
    led.unplot(x, x)
    basic.pause(100)
    if (x == y) {
        brojac += 1
    }
}
basic.showNumber(brojac)
basic.forever(function () {
	
})
