import moji from "moji";

document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const zenkakuResult = document.getElementById('zenkakuResult');
    const hankakuResult = document.getElementById('hankakuResult');

    inputText.addEventListener('input', function () {
        const zenkakuText = moji(inputText.value).convert('HE', 'ZE').toString();
        zenkakuResult.textContent = zenkakuText;

        const hankakuText = moji(inputText.value).convert('ZE', 'HE').toString();
        hankakuResult.textContent = hankakuText;
    });
});
