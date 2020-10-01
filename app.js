const quiz = [
    {
        question: '中学12年生',
        answers: [
            '呂布カルマ',
            '晋平太',
            'TK',
            'R指定'
        ],
        correct: 'R指定'
    }, {
        question: '要はマイクで沸かすか分からすか',
        answers: [
            'DDS',
            'SAM',
            'ID',
            'R指定'
        ],
        correct: 'SAM'
    }, {
        question: 'ただいまだからおかえりで返せ',
        answers: [
            'Amateras',
            'スナフキン',
            'SYAMO',
            '呂布カルマ'
        ],
        correct: 'Amateras'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $btn = document.getElementsByTagName('button');
let btnLength = $btn.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;

    let btnIndex = 0;
    while (btnIndex < btnLength) {
        $btn[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
        btnIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解');
        score++;
    } else {
        window.alert('不正解');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了' + score + '/' + quizLength + '正解');
    }
}

let handlerIndex = 0;

while (handlerIndex < btnLength) {
    $btn[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}




