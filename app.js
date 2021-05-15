var btntranslate = document.querySelector('#btn-translate')
var textInput = document.querySelector("#txt-input")
var textoutput = document.querySelector("#output")

function inputHandler() {
    textoutput.innerText = textInput.value + " translated"
}

btntranslate.addEventListener("click", inputHandler)
