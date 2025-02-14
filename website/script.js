function showMessage() {
    document.getElementById("hiddenMessage").style.display = "block";
}
function showButton() {
    document.getElementById("hiddenButton").style.display = "inline";
}

function startValentine(){
    window.location.href = 'valentine.html';
}
// Quiz logic
function checkQuiz() {
    let score = 0;
    
    let answers = {
        q1: "black",     // Change this to your actual favorite color
        q2: "tokyo",     // Change this to your actual dream vacation spot
        q3: "chocolate" // Change this to your actual go-to snack
    };

    let userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked')
    };

    for (let key in userAnswers) {
        if (userAnswers[key] && userAnswers[key].value === answers[key]) {
            score++;
        }
    }

    let resultMessage = `You got ${score} out of 3 right!`;
    if (score === 3) {
        resultMessage += " 🎉 Wow, you really know me well!";
    } else if (score === 2) {
        resultMessage += " 😊 Pretty good, babe!";
    } else {
        resultMessage += " 😅 We need to spend more time together!";
    }

    document.getElementById("quizResult").innerText = resultMessage;
}
