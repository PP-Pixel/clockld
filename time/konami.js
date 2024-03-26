// キーコードを配列に格納する
const konamiCodes = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

// カウンターを初期化する
let counter = 0;

// キーイベントを監視する
document.addEventListener("keydown", function (event) {
    // キーコードが配列に含まれている場合
    if (konamiCodes.includes(event.keyCode)) {
        // カウンターを増やす
        counter++;
    }

    // カウンターが配列の長さになったら、別のページにリダイレクトする
    if (counter === konamiCodes.length) {
        window.location.href = "../";
    }
});