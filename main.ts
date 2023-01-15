input.onButtonPressed(Button.A, function () {
    brojac = (brojac + 1) % 26
    sifrat = abeceda[brojac]
    basic.showString("" + (sifrat))
})
input.onButtonPressed(Button.AB, function () {
    desifriraj()
})
input.onButtonPressed(Button.B, function () {
    kljuc = (kljuc + 1) % 26
    basic.showNumber(kljuc)
})
function desifriraj () {
    sifrat1 = brojac - kljuc
    while (sifrat1 < 0) {
        sifrat1 = sifrat1 + 26
    }
    slovo = sifrat1 % 26
    basic.showString("" + (abeceda[slovo]))
}
let slovo = 0
let sifrat1 = 0
let sifrat = ""
let brojac = 0
let kljuc = 0
let abeceda: string[] = []
abeceda = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]
kljuc = 0
brojac = -1
