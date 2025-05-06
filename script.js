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
        setElementBGColor(element, red, green, blue);
        setDisplayValues(red, green, blue);
        });
    }
}

function setColor(colorBox, red, green, blue) {
    let rgbVal = [red, green, blue].join(',');
    BGElement.style.backgroundColor = "rgb(" + rgbVal + ")";
}

function setDisplayValues(red, green, blue) {
    let redVal = document.getElementById("red-val");
    let greenVal = document.getElementById("green-val");
    let blueVal = document.getElementById("blue-val");

    redVal.innerText = red;
    greenVal.innerText = green;
    blueVal.innerText = blue;
}