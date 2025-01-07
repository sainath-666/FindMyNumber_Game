function highlightButton(btn) {
    const siblings = btn.parentNode.querySelectorAll('input[type="button"]');
    siblings.forEach(button => button.classList.remove('active'));
    btn.classList.add('active');
}

function fun(value) {
    document.getElementById("result").value += value;
}

function check() {
    const values = {
        "1000": 1, "100": 2, "1": 3, "10": 4, "1100": 5,
        "1010": 6, "1001": 7, "101": 8, "110": 9, "11": 10,
        "1101": 11, "1110": 12, "1011": 13, "111": 14, "1111": 15
    };

    let result = document.getElementById("result").value;
    let guessedNumber = values[result] || "Invalid input!";
    alert(`You guessed number is: ${guessedNumber}`);
    clearHighlights();
    clr();
}

function clr() {
    document.getElementById("result").value = "";
    clearHighlights();
}

function clearHighlights() {
    const allButtons = document.querySelectorAll('input[type="button"]');
    allButtons.forEach(button => button.classList.remove('active'));
}
