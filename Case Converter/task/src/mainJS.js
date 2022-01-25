document.getElementById("upper-case").addEventListener("click", upperCase);
function upperCase()
{
    let text = document.getElementById("text").value;
    let textUpper = text.toUpperCase();
    document.getElementById("text").value=textUpper;
}

document.getElementById("lower-case").addEventListener("click", lowerCase);
function lowerCase()
{
    let text = document.getElementById("text").value;
    let textLower = text.toLowerCase();
    document.getElementById("text").value=textLower;
}

document.getElementById("proper-case").addEventListener("click", properCase);
function properCase()
{
    let text = document.getElementById("text").value;
    let textProper=firstLetterIsUpper(text);
    document.getElementById("text").value=textProper;
}

document.getElementById("sentence-case").addEventListener("click", sentenceCase);
function sentenceCase(){
    let text = document.getElementById("text").value;
    let textSentence = firstLetterIsUpperAfterDot(text);
    document.getElementById("text").value=textSentence;
}
function firstLetterIsUpper(text)
{
    let splitText=text.toLowerCase().split(' ');
    for (let i = 0; i < splitText.length; i++){
        splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1);
    }
    return splitText.join(' ');
}
function firstLetterIsUpperAfterDot(text) {
    let splitText=text.toLowerCase().split('. ');
    for (let i = 0; i < splitText.length; i++){
        splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1);
    }
    return splitText.join('. ');
}
document.getElementById("save-text-file").addEventListener("click", function () {
    let text = document.getElementById("text").value;
    let fileName = "text.txt";
    download(fileName, text);
}, false);




function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}