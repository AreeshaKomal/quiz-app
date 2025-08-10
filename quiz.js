let questions = [
    { q: "What is 2+2?", options: ["3","4","5"], answer: 1 },
    { q: "Capital of France?", options: ["London","Paris","Berlin"], answer: 1 },
    { q: "5 * 6 = ?", options: ["30","20","25"], answer: 0 },
    { q: "HTML stands for?", options: ["HyperText Markup Language","HighText Machine Language","Hyper Tool Multi Language"], answer: 0 },
    { q: "CSS is used for?", options: ["Styling","Structure","Logic"], answer: 0 },
    { q: "JS stands for?", options: ["Java Script","Just Script","Jumbo Style"], answer: 0 },
    { q: "Largest planet?", options: ["Earth","Jupiter","Mars"], answer: 1 },
    { q: "Sun rises from?", options: ["East","West","North"], answer: 0 },
    { q: "3+5=?", options: ["7","8","9"], answer: 1 },
    { q: "Which is programming language?", options: ["HTML","CSS","JavaScript"], answer: 2 },
    { q: "H2O is?", options: ["Oxygen","Water","Hydrogen"], answer: 1 },
    { q: "2^3=?", options: ["6","8","9"], answer: 1 },
    { q: "Fastest animal?", options: ["Cheetah","Tiger","Horse"], answer: 0 },
    { q: "Binary of 2?", options: ["10","11","01"], answer: 0 },
    { q: "CSS property for text color?", options: ["font-color","color","text-style"], answer: 1 },
    { q: "Capital of Pakistan?", options: ["Karachi","Islamabad","Lahore"], answer: 1 },
    { q: "JavaScript runs on?", options: ["Browser","Server","Both"], answer: 2 },
    { q: "HTML tag for link?", options: ["<a>","<link>","<href>"], answer: 0 },
    { q: "RGB stands for?", options: ["Red Green Blue","Red Grey Black","Round Green Blue"], answer: 0 },
    { q: "Pi value?", options: ["3.14","3.15","3.16"], answer: 0 },
    { q: "Which is fruit?", options: ["Carrot","Apple","Potato"], answer: 1 },
    { q: "JS keyword to declare variable?", options: ["var","make","declare"], answer: 0 },
    { q: "Earth shape?", options: ["Flat","Round","Square"], answer: 1 },
    { q: "CPU stands for?", options: ["Central Processing Unit","Computer Personal Unit","Central Print Unit"], answer: 0 },
    { q: "1 KB = ?", options: ["1024 Bytes","1000 Bytes","512 Bytes"], answer: 0 },
    { q: "Which is search engine?", options: ["Google","Facebook","Twitter"], answer: 0 },
    { q: "HTML tag for image?", options: ["<img>","<image>","<pic>"], answer: 0 },
    { q: "CSS stands for?", options: ["Cascading Style Sheets","Creative Style System","Colorful Style Sheet"], answer: 0 },
    { q: "Which is NOT JS framework?", options: ["React","Angular","Django"], answer: 2 },
    { q: "Capital of India?", options: ["Delhi","Mumbai","Kolkata"], answer: 0 }
];

let index = 0;
let score = 0;
let timer = 30 * 60; // 30 minutes in seconds

function startTimer() {
    let timerDiv = document.getElementById("timer");
    let countdown = setInterval(() => {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        timerDiv.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        timer--;

        if(timer < 0) {
            clearInterval(countdown);
            endQuiz();
        }
    }, 1000);
}

function loadQuestion() {
    let q = questions[index];
    document.getElementById("question").textContent = q.q;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach((opt, i) => {
        optionsDiv.innerHTML += `<input type="radio" name="option" value="${i}"> ${opt}<br>`;
    });
}

function nextQuestion() {
    let selected = document.querySelector('input[name="option"]:checked');
    if(selected && parseInt(selected.value) === questions[index].answer) {
        score++;
    }
    index++;
    if(index < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.body.innerHTML = `<div class='container'>
        <h1>Quiz Finished</h1>
        <p>Your score: ${score}/${questions.length}</p>
        <p>Percentage: ${(score/questions.length*100).toFixed(2)}%</p>
        ${score >= 20 ? "<h2>🎉 Congratulations! You Passed! 🎉</h2>" : "<h2>😔 You Failed! Best of luck for the future!</h2>"}
    </div>`;
}

window.onload = () => {
    startTimer();
    loadQuestion();
};
