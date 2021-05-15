var btntranslate = document.querySelector('#btn-translate')
var textInput = document.querySelector("#txt-input")
var textoutput = document.querySelector("#output")

// var serverurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverurl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
    return serverurl + "?text=" + text
}

function errorhandler(error) {
    console.log("Error Occured", error)
}

function clickHandler() {
    var inputText = textInput.value;
    fetch(getTranslationUrl(inputText))
        .then(respnose => respnose.json())
        .then(json => {
            var translatedText = json.contents.translated
            textoutput.innerText = translatedText
        })
        .catch(errorhandler)
}

btntranslate.addEventListener("click", clickHandler)
