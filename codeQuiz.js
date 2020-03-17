$(document).ready(function () {
    const startButton = $("#startButton")
    const nextButton = $('#nextButton')
    const questionButton = $("#question")
    const ans1Button = $('#ans1')
    const ans2Button = $('#ans2')
    const ans3Button = $('#ans3')
    const ans4Button = $('#ans4')
    var totalSeconds;
    var minutes = 0;
    var currentQuestionIndex;
    var ct = 6;
    var questionTimer;
    var secondsArray = [];
    var correctAnsArray = [];



    startButton.on('click', startQuiz);

    function startQuiz() {
        console.log('started');
        startButton.addClass('hide');
        currentQuestionIndex = 0;
        var countDowntoBegin = setInterval(function () {
            ct--
            $('#ctDown').removeClass('hide').text(`Quiz will begin in ${ct} seconds!`);

            if (ct === -1) {
                stopCountdown();
                startTimer();
                ct = 6
            }
        }, 1000)

        function stopCountdown() {
            $('#ctDown').addClass('hide');
            clearInterval(countDowntoBegin);
        }
    };

    function startTimer() {
        questionButton.removeClass("hide"); questionButton.text(codeQuestions[currentQuestionIndex].question);
        ans1Button.removeClass('hide'); ans1Button.text(codeQuestions[currentQuestionIndex].answers[0].text);
        ans2Button.removeClass('hide'); ans2Button.text(codeQuestions[currentQuestionIndex].answers[1].text);
        ans3Button.removeClass('hide'); ans3Button.text(codeQuestions[currentQuestionIndex].answers[2].text);
        ans4Button.removeClass('hide'); ans4Button.text(codeQuestions[currentQuestionIndex].answers[3].text);
        var counter = 0;
        questionTimer = setInterval(function (totalSeconds) {
            totalSeconds++
            counter++;
            console.log(counter);
            if (counter === 60) {
                minutes++;
                counter = 0;
            }

            $('#minandsec').removeClass('hide').text(`${minutes} minutes and ${counter} seconds`);

        }, 1000);
        ans1Button.on("click", checkAnswer);
        ans2Button.on("click", checkAnswer);
        ans3Button.on("click", checkAnswer);
        ans4Button.on("click", checkAnswer);
    };

    function stopQuestionTimer() {
        // console.log(totalSeconds);
        clearInterval(questionTimer);
    }

    function checkAnswer() {
        stopQuestionTimer();
        console.log("checking answers ");
        questionButton.addClass("hide"); ans1Button.addClass('hide'); ans2Button.addClass('hide');
        ans3Button.addClass('hide'); ans4Button.addClass('hide'); $('#minandsec').addClass('hide');
        nextButton.removeClass('hide'); nextButton.on('click', displayNextQuestion)

    };
    function displayNextQuestion() {
        nextButton.addClass('hide');
        currentQuestionIndex++
        if (currentQuestionIndex > codeQuestions.length) {
            endGame();
        }
        else {
            startTimer();
        }
    }

    function endGame() {
        startButton.removeClass('hide')
        console.log('done');
    }



    const codeQuestions = [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            answers: [
                { text: 'js', ans: 'ans1', correct: false },
                { text: 'javascripting', ans: 'ans2', correct: false },
                { text: 'scripting', ans: 'ans3', correct: false },
                { text: 'script', ans: 'ans4', correct: true },
            ]
        },
        {
            question: "Which of the following is an Element in JavaScript?",
            answers: [
                { text: 'div', ans: 'ans1', correct: false },
                { text: '<div>', ans: 'ans2', correct: true },
                { text: 'header', ans: 'ans3', correct: false },
                { text: 'body', ans: 'ans4', correct: false },
            ]
        },
        {
            question: "What is the correct syntax for referring to an external script called xxx.js?",
            answers: [
                { text: 'script src', ans: 'ans1', correct: true },
                { text: 'script href', ans: 'ans2', correct: false },
                { text: 'src', ans: 'ans3', correct: false },
                { text: 'href', ans: 'ans4', correct: false },
            ]
        },

    ];
});