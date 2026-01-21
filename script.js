const questions = {
    java: [
        "Explain the difference between ArrayList and LinkedList.",
        "What is JVM and how does it work?",
        "What are the main OOP principles in Java?",
        "Difference between abstract class and interface.",
        "What is exception handling in Java?",
        "Explain method overloading vs method overriding.",
        "What is garbage collection in Java?",
        "Difference between HashMap and Hashtable.",
        "What is the use of final keyword?",
        "Explain multithreading in Java."
    ],

    sql: [
        "What is indexing and why is it used?",
        "Explain normalization.",
        "Difference between INNER JOIN and LEFT JOIN.",
        "What is a primary key?",
        "Difference between DELETE, TRUNCATE, and DROP.",
        "What is a foreign key?",
        "Explain ACID properties.",
        "What is GROUP BY clause?",
        "Difference between WHERE and HAVING.",
        "What is a subquery?"
    ],

    hr: [
        "Tell me about a challenge you faced.",
        "Why should we hire you?",
        "Tell me about yourself.",
        "Describe a time you failed and what you learned.",
        "How do you handle pressure?",
        "What are your strengths and weaknesses?",
        "Where do you see yourself in 5 years?",
        "Describe a conflict you faced in a team.",
        "Why do you want to work with a startup?",
        "How do you handle feedback?"
    ]
};


const topicSelect = document.getElementById("topicSelect");
const loadQuestionBtn = document.getElementById("loadQuestion");
const questionEl = document.getElementById("question");
const answerBox = document.getElementById("answer");
const wordCountEl = document.getElementById("wordCount");
const feedbackEl = document.getElementById("feedback");
const confidenceRange = document.getElementById("confidenceRange");
const confidenceValue = document.getElementById("confidenceValue");

const IDEAL_MIN = 80;
const IDEAL_MAX = 120;

loadQuestionBtn.onclick = () => {
    const list = questions[topicSelect.value];
    questionEl.textContent = list[Math.floor(Math.random() * list.length)];
    reset();
};

function reset() {
    answerBox.value = "";
    wordCountEl.textContent = 0;
    feedbackEl.textContent = "";
}

answerBox.oninput = () => {
    const words = answerBox.value.trim().split(/\s+/).filter(w => w).length;
    wordCountEl.textContent = words;

    if (words < IDEAL_MIN) {
        feedbackEl.textContent = "❌ Too short";
        feedbackEl.className = "feedback bad";
    } else if (words <= IDEAL_MAX) {
        feedbackEl.textContent = "✅ Perfect";
        feedbackEl.className = "feedback good";
    } else {
        feedbackEl.textContent = "⚠️ Over-explained";
        feedbackEl.className = "feedback warn";
    }
};

confidenceRange.oninput = () => {
    confidenceValue.textContent = confidenceRange.value + " / 5";
};
