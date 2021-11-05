let tenpe = 0
let tenperatura = input.temperature()
basic.showNumber(tenperatura - 6)
music.setVolume(37)
basic.forever(function () {
    if (tenperatura < 30) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(165, music.beat(BeatFraction.Quarter))
    }
    if (tenperatura > 20) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
        music.playTone(165, music.beat(BeatFraction.Quarter))
    }
})
basic.forever(function () {
    tenpe = input.temperature()
    basic.showNumber(input.temperature())
    if (tenperatura < 30) {
        basic.showIcon(IconNames.Chessboard)
    } else if (tenperatura > 20) {
        basic.showIcon(IconNames.Square)
    }
})
