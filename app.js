var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
//outputDiv.innerText="chaitali kumari"
//console.log(outputDiv);
var serverURL ="https://api.funtranslations.com/translate/minion.json"
//console.log(txtInput);
function getTraslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured" , error);
    alert("something wrong with server! try again after some time");
}


function clickHandler(){
   // console.log("clicked!");
    //console.log("input "+ txtInput.value);
    //outputDiv.innerText="mbhgfdsdvbbn "+ txtInput.value;
    var inputText=txtInput.value;
    fetch(getTraslationURL(inputText)) .then(response => response.json()).then(json => {var translatedText = json.contents.translated; outputDiv.innerText=translatedText;})
    .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickHandler);