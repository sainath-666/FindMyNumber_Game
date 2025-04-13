// Add animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.container').classList.add('fade-in');
});

// Button highlight function
function highlightButton(btn) {
    const siblings = btn.parentNode.querySelectorAll('input[type="button"]');
    siblings.forEach(button => button.classList.remove('active'));
    btn.classList.add('active');
    
    // Add a small animation effect
    btn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 200);
}

// Add value to result
function fun(value) {
    document.getElementById("result").value += value;
}

// Check the guessed number
function check() {
    const values = {
        "1000": 1, "0100": 2, "0001": 3, "0010": 4, "1100": 5,
        "1010": 6, "1001": 7, "0101": 8, "0110": 9, "0011": 10,
        "1101": 11, "1110": 12, "1011": 13, "0111": 14, "1111": 15
    };

    let result = document.getElementById("result").value;
    
    // Validate input
    if (!result || result.length !== 4) {
        showResult("Please answer all four tables!", false);
        return;
    }
    
    let guessedNumber = values[result];
    
    if (guessedNumber) {
        showResult(`Your number is: ${guessedNumber}! 🎉`, true);
    } else {
        showResult("Invalid input! Please try again.", false);
    }
    
    clearHighlights();
    clr();
}

// Show result in the custom modal
function showResult(message, isSuccess) {
    const resultDisplay = document.getElementById('result-display');
    const resultText = document.getElementById('result-text');
    const resultIcon = document.querySelector('.result-icon');
    
    resultText.textContent = message;
    
    // Change icon based on success/failure
    if (isSuccess) {
        resultIcon.className = 'fas fa-check-circle result-icon';
        resultIcon.style.color = '#4361ee';
    } else {
        resultIcon.className = 'fas fa-exclamation-circle result-icon';
        resultIcon.style.color = '#ff6b6b';
    }
    
    // Show the result display with animation
    resultDisplay.style.display = 'flex';
    // Small delay to ensure display change is processed before adding the active class
    setTimeout(() => {
        resultDisplay.classList.add('active');
    }, 10);
}

// Close the result display
function closeResult() {
    const resultDisplay = document.getElementById('result-display');
    resultDisplay.classList.remove('active');
    setTimeout(() => {
        resultDisplay.style.display = 'none';
    }, 300);
}

// Clear the result
function clr() {
    document.getElementById("result").value = "";
    clearHighlights();
}

// Clear all button highlights
function clearHighlights() {
    const allButtons = document.querySelectorAll('input[type="button"]');
    allButtons.forEach(button => button.classList.remove('active'));
}
