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
        let allQuestionsArray = [0, 3, 9, 8, 4, 5, 2, 1, 6, 7];
        let shuffleallquestionsArray = function(arr) {
            let newPos,
                temp;
            for (let j = arr.length - 1; j > 0; j--) {
                newPos = Math.floor(Math.random() * (j + 1));
                temp = arr[j];
                arr[j] = arr[newPos];
                arr[newPos] = temp;
            };
            return arr;
        };
        let newRandomArray = shuffleallquestionsArray(allQuestionsArray);
        console.log(newRandomArray);
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

    function checkAnswer(id) {
        const selectedAnswer = id.target.id
        console.log(selectedAnswer);
        if (selectedAnswer === 'ans1' && codeQuestions[currentQuestionIndex].answers[0].correct) {
            correctAnsArray.push(1);
            console.log(correctAnsArray);
        }
        else if (selectedAnswer === 'ans2' && codeQuestions[currentQuestionIndex].answers[1].correct) {
            correctAnsArray.push(1);
            console.log(correctAnsArray);
        }
        else if (selectedAnswer === 'ans3' && codeQuestions[currentQuestionIndex].answers[2].correct) {
            correctAnsArray.push(1);
            console.log(correctAnsArray);
        }
        else if (selectedAnswer === 'ans4' && codeQuestions[currentQuestionIndex].answers[3].correct) {
            correctAnsArray.push(1);
            console.log(correctAnsArray);
        }
        else {
            correctAnsArray.push(0);
        }
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
                { text: 'js', correct: false },
                { text: 'javascripting', correct: false },
                { text: 'scripting', correct: false },
                { text: 'script', correct: true },
            ]
        },
        {
            question: "Which of the following is an Element in JavaScript?",
            answers: [
                { text: 'div', correct: false },
                { text: '<div>', correct: true },
                { text: 'header', correct: false },
                { text: 'body', correct: false },
            ]
        },
        {
            question: "What is the correct syntax for referring to an external script called xxx.js?",
            answers: [
                { text: 'script src', correct: true },
                { text: 'script href', correct: false },
                { text: 'src', correct: false },
                { text: 'href', correct: false },
            ]
        },
        {
            question: "What copany developed Javascript?",
            answers: [
                { text: 'Hershey', correct: false },
                { text: 'IBM', correct: false },
                { text: 'Netscape', correct: true },
                { text: 'Microsoft', correct: false },
            ]
        },
        {
            question: "What is an example of a comment statement?",
            answers: [
                { text: '// this one', correct: true },
                { text: '<comment>', correct: false },
                { text: '$this one', correct: false },
                { text: '(this one)', correct: false },
            ]
        },
        {
            question: "which of these is a looping structure in JS?",
            answers: [
                { text: 'next', correct: false },
                { text: 'during', correct: false },
                { text: 'For', correct: true },
                { text: 'Each', correct: false },
            ]
        },
        {
            question: "How can you convert the string of any base to integer in JavaScript?",
            answers: [
                { text: 'number', correct: false },
                { text: 'parseInt', correct: true },
                { text: 'setInt', correct: false },
                { text: '.stringInt', correct: false },
            ]
        },
        {
            question: "What is a type of pop-up Box?",
            answers: [
                { text: 'Alert', correct: false },
                { text: 'confirm', correct: false },
                { text: 'Prompt', correct: false },
                { text: 'all of the Above', correct: true },
            ]
        },
        {
            question: "What is a basic group of data type in JavaScript?",
            answers: [
                { text: 'Primitive', correct: true },
                { text: 'Global', correct: false },
                { text: 'Reference types', correct: true },
                { text: 'Scoped', correct: false },
            ]
        },
        {
            question: "What is the use of the blur function?",
            answers: [
                { text: 'removes focus', correct: true },
                { text: 'removes hue', correct: false },
                { text: 'removes font weight', correct: false },
                { text: 'adds hue', correct: false },
            ]
        },

    ];
});