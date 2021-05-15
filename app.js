var btntranslate = document.querySelector('#btn-translate')
var textInput = document.querySelector("#txt-input")

function inputHandler() {
    console.log("cliked")
    console.log(textInput.value)
}

btntranslate.addEventListener("click", inputHandler)
