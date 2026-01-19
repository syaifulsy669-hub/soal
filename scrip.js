const questions = [
    {
        question: "Pancasila sebagai dasar negara ditetapkan pada?",
        a: "1 Juni 1945",
        b: "17 Agustus 1945",
        c: "18 Agustus 1945",
        d: "22 Juni 1945",
        correct: "C"
    },
    {
        question: "Lembaga yang mengesahkan UUD 1945 adalah?",
        a: "BPUPKI",
        b: "PPKI",
        c: "DPR",
        d: "MPR",
        correct: "B"
    },
    {
        question: "Makna Bhinneka Tunggal Ika adalah?",
        a: "Gotong royong",
        b: "Persatuan wilayah",
        c: "Berbeda-beda tetapi tetap satu",
        d: "Cinta tanah air",
        correct: "C"
    }
];

let index = 0;
let score = 0;

function startQuiz() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    const q = questions[index];
    document.getElementById("number").innerText =
        `Soal ${index + 1} / ${questions.length}`;

    document.getElementById("question").innerText = q.question;
    document.getElementById("question").classList.remove("fade");
    void document.getElementById("question").offsetWidth;
    document.getElementById("question").classList.add("fade");

    document.getElementById("a").innerText = q.a;
    document.getElementById("b").innerText = q.b;
    document.getElementById("c").innerText = q.c;
    document.getElementById("d").innerText = q.d;

    document.getElementsByName("answer").forEach(r => r.checked = false);
}

function nextQuestion() {
    const answers = document.getElementsByName("answer");
    let selected = null;

    answers.forEach(a => {
        if (a.checked) selected = a.value;
    });

    if (!selected) {
        alert("Pilih jawaban terlebih dahulu!");
        return;
    }

    if (selected === questions[index].correct) {
        score += 10;
    }

    document.getElementById("score").innerText = `Skor: ${score}`;

    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").classList.add("hidden");
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("finalScore").innerText =
            `Skor Akhir Anda: ${score}`;
    }
}
