import moji from "moji";

document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const zenkakuResult = document.getElementById('zenkakuResult');
    const hankakuResult = document.getElementById('hankakuResult');
    const characterTypeRadios = document.getElementsByName('characterType'); // For character type
    const spaceConversionRadios = document.getElementsByName('spaceConversion'); // For space conversion

    // Add listeners for input and changes
    inputText.addEventListener('input', updateConversion);
    characterTypeRadios.forEach((radio) =>
        radio.addEventListener('change', updateConversion)
    );
    spaceConversionRadios.forEach((radio) =>
        radio.addEventListener('change', updateConversion)
    );

    function updateConversion() {
        const text = inputText.value;
        const characterType = getSelectedValue(characterTypeRadios); // "english" or "kana"
        const spaceConversion = getSelectedValue(spaceConversionRadios); // "hankaku-space" or "zenkaku-space"

        let zenkakuText = text;
        let hankakuText = text;

        // Convert text based on character type
        if (characterType === 'english') {
            zenkakuText = moji(text).convert('HE', 'ZE').toString();
            hankakuText = moji(text).convert('ZE', 'HE').toString();
        } else if (characterType === 'kana') {
            zenkakuText = moji(text).convert('HK', 'ZK').toString();
            hankakuText = moji(text).convert('ZK', 'HK').toString();
        }

        // Apply space conversion if needed
        if (spaceConversion === 'zenkaku-space') {
            zenkakuText = moji(zenkakuText).convert('HS', 'ZS').toString();
            hankakuText = moji(hankakuText).convert('HS', 'ZS').toString();
        } else if (spaceConversion === 'hankaku-space') {
            zenkakuText = moji(zenkakuText).convert('ZS', 'HS').toString();
            hankakuText = moji(hankakuText).convert('ZS', 'HS').toString();
        }

        // Update result areas
        zenkakuResult.value = zenkakuText;
        hankakuResult.value = hankakuText;
    }

    function getSelectedValue(radioButtons) {
        for (const radio of radioButtons) {
            if (radio.checked) {
                return radio.value;
            }
        }
        return null;
    }
});
