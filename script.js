window.onload = function() {
    initColorPicker();
};

function initColorPicker() {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    let colorPickers = document.getElementsByClassName("picker");
    setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(elements, colors, pickerElements) {
    for (let i = 0; i < pickerElements.length; i++) {
        pickerElements[i].addEventListener('change', () => {
        let red = colors.red.value;
        let green = colors.green.value;
        let blue = colors.blue.value;
        setBoxRBGColor(elements, red, green, blue);
        });
    }
}

function setBoxRBGColor(colorBox, red, green, blue) {
    let rgbVal = [red, green, blue].join(',');
    colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
    setDisplayValues(red, green, blue);
}

function setDisplayValues(red, green, blue) {
    let redVal = document.getElementById("red-Val");
    let greenVal = document.getElementById("green-Val");
    let blueVal = document.getElementById("blue-Val");

    redVal.innerText = red;
    greenVal.innerText = green;
    blueVal.innerText = blue;
}