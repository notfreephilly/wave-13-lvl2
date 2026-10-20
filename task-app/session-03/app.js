
let percent = 15

function isGoodTip(percent) {
    if (percent >= 15) {
        return true
    }
    return false
}

const tipLabel = isGoodTip(percent) ? "Generous" : "Standard"
console.log(tipLabel);
console.log(isGoodTip(percent));
