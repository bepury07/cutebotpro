input.onButtonPressed(Button.A, function () {
    CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0xffff00)
})
input.onButtonPressed(Button.AB, function () {
    CutebotPro.turnOffAllHeadlights()
})
input.onButtonPressed(Button.B, function () {
    CutebotPro.colorLight(CutebotProRGBLight.RGBR, 0x007fff)
})
CutebotPro.singleHeadlights(CutebotProRGBLight.RGBL, 158, 76, 175)
basic.forever(function () {
	
})
