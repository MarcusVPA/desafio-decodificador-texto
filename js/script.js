function inputText() {
    return document
            .querySelector("#input-message")
            .value
            .toLowerCase()
            .trim();
}

function normalizeMessage(message) {
    return message
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
}

function encodeReplace(message) {
    return message
            .replace(/e/g,"enter")
            .replace(/i/g,"imes")
            .replace(/a/g,"ai")
            .replace(/o/g,"ober")
            .replace(/u/g,"ufat");
}

function decodeReplace(message) {
    return message
            .replace(/enter/g,"e")
            .replace(/imes/g,"i")
            .replace(/ai/g,"a")
            .replace(/ober/g,"o")
            .replace(/ufat/g,"u");
}

function copy() {
    document
        .querySelector("#output-message")
        .select();
    document.execCommand("copy");
    alert("Mensagem copiada!!!");
}

function encrypt() {
    document
        .querySelector("#output-message")
        .innerHTML = encodeReplace(normalizeMessage(inputText()));
    changeDiv();
}

function descrypt() {
    document
        .querySelector("#output-message")
        .innerHTML = decodeReplace(normalizeMessage(inputText()));
    changeDiv();
}

function changeDiv() {
    document
        .querySelector("#primary")
        .style.display = "none";
    document
        .querySelector("#secondary")
        .style
        .cssText = `
                display: block;
            `;
}

document
    .querySelector("#encrypt-btn")
    .addEventListener("click", encrypt);

document
    .querySelector("#descrypt-btn")
    .addEventListener("click", descrypt);

document
    .querySelector("#copy-btn")
    .addEventListener("click", copy);
