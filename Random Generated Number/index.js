function randomNum() {
    const a = Number(document.getElementById("randomNum").value);
    const b = Math.floor(Math.random() * 11);

    if (a === b) {
        alert("Good Job")

    }
    else {
        alert("You Missed")
    }
}