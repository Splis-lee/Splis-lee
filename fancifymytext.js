function makeBigger() {
    alert("Hello, world!");
    document.getElementById("textArea").style.fontSize = "24pt";
}

function applyStyles() {
    let text = document.getElementById("textArea");

    if (document.getElementById("fancy").checked) {
        alert("FancyShmancy selected!");
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function mooify() {
    let textArea = document.getElementById("textArea");

    // Uppercase the text
    let text = textArea.value.toUpperCase();

    // Add "-MOO" to last word of each sentence
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-MOO";
        }
        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(". ");
}
