$(document).ready(function () {
    const playAgain = $('#playAgainButton')
    const startButton = $("#startButton")
    const nextButton = $('#nextButton')
    const questionButton = $("#question")
    const ans1Button = $('#ans1')
    const ans2Button = $('#ans2')
    const ans3Button = $('#ans3')
    const ans4Button = $('#ans4')
    const bestScore = $('#highScore')
    const htmlPage = $(document)
    const correctButton = $('#correct')
    const notCorrectButton = $('#notcorrect')
    var totalSecondsArray = [];
    var minutes = 0;
    var ct = 4;
    var secondsScore = 0;
    var correctAns = 0;
    var correctAnsArray = [];
    let allQuestionsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let newRandomArray = [];
    var Index = 0;
    var counter = 0;
    var totalSeconds = 0;
    var questionTimer;
    var highScore = 0;



    ans1Button.on("click", checkAnswer);
    ans2Button.on("click", checkAnswer);
    ans3Button.on("click", checkAnswer);
    ans4Button.on("click", checkAnswer);
    nextButton.on('click', displayNextQuestion);
    playAgain.on('click', reLoadPage);

    startButton.on('click', function startQuiz() {
        newScore = 0;
        Index = 0;
        j = 0;
        i = 0;

        let shuffleallquestionsArray = function (arr) {
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
        newRandomArray = shuffleallquestionsArray(allQuestionsArray);
        console.log(newRandomArray);
        console.log('started');
        startButton.addClass('hide');

        var countDowntoBegin = setInterval(function () {
            ct--
            $('#ctDown').removeClass('hide').text(`Quiz will begin in ${ct} seconds!`);

            if (ct === -1) {
                stopCountdown();
                displayNextQuestion();

                ct = 4
            }
        }, 1000)

        function stopCountdown() {
            $('#ctDown').addClass('hide');
            clearInterval(countDowntoBegin);
        }
    });



    function stopQuestionTimer() {
        // console.log(totalSeconds);
        totalSeconds = 0;
        counter = 0;
        clearInterval(questionTimer);
    }

    function checkAnswer(e) {
        stopQuestionTimer();
        selectedAnswer = e.target.id
        console.log(selectedAnswer);
        console.log(totalSecondsArray);
        console.log(codeQuestions);


        console.log("checking answers ");
        // hiding buttons
        questionButton.addClass("hide"); ans1Button.addClass('hide'); ans2Button.addClass('hide');
        ans3Button.addClass('hide'); ans4Button.addClass('hide'); $('#minandsec').addClass('hide');
        nextButton.removeClass('hide');
        if (selectedAnswer === 'ans1' && codeQuestions[newRandomArray[Index]].answers[0].correct) {
            correctAnsArray.push(1);
            correctButton.removeClass('hide');
        }
        else if (selectedAnswer === 'ans2' && codeQuestions[newRandomArray[Index]].answers[1].correct) {
            correctAnsArray.push(1);
            correctButton.removeClass('hide');
        }
        else if (selectedAnswer === 'ans3' && codeQuestions[newRandomArray[Index]].answers[2].correct) {
            correctAnsArray.push(1);
            correctButton.removeClass('hide');
        }
        else if (selectedAnswer === 'ans4' && codeQuestions[newRandomArray[Index]].answers[3].correct) {
            correctAnsArray.push(1);
            correctButton.removeClass('hide');
        }
        else {
            correctAnsArray.push(0);
            notCorrectButton.removeClass('hide');
        }


    };
    function displayNextQuestion() {
        correctButton.addClass('hide');
        notCorrectButton.addClass('hide');
        if (Index > allQuestionsArray.length - 3) {
            stopQuestionTimer();
            endGame();
        }
        else {
            Index++
            questionTimer;
            questionButton.removeClass("hide"); questionButton.text(codeQuestions[newRandomArray[Index]].question);
            ans1Button.removeClass('hide'); ans1Button.text(codeQuestions[newRandomArray[Index]].answers[0].text);
            ans2Button.removeClass('hide'); ans2Button.text(codeQuestions[newRandomArray[Index]].answers[1].text);
            ans3Button.removeClass('hide'); ans3Button.text(codeQuestions[newRandomArray[Index]].answers[2].text);
            ans4Button.removeClass('hide'); ans4Button.text(codeQuestions[newRandomArray[Index]].answers[3].text);
            nextButton.addClass('hide');
            questionTimer = setInterval(function () {
                totalSeconds++
                counter++;
                console.log(counter);
                if (counter === 60) {
                    minutes++;
                    counter = 0;
                }

                $('#minandsec').removeClass('hide').text(`${minutes} minutes and ${counter} seconds`);
                totalSecondsArray.push('s');

            }, 1000);


        }
    }


    function endGame() {
        nextButton.addClass('hide');
        playAgain.removeClass('hide');
        console.log(correctAnsArray);
        secondsScore = totalSecondsArray.length;
        for (var j = 0; j < correctAnsArray.length; j++) {
            if (correctAnsArray[j] === 1) {
                correctAns++
            }
            else {
                console.log(correctAns)
            }
        }
        console.log(secondsScore, correctAns);
        var newScore = (correctAns * 1000) - (secondsScore * 3);
        console.log(newScore);

        highScore = localStorage.getItem('highScore')
        if (newScore > highScore) {
            highScore = newScore
            localStorage.removeItem('highScore');
            localStorage.setItem('highScore', highScore);
            bestScore.text(`You have the New High Score ${highScore} points YAY !!`)
        }
        else {
            console.log(highScore);
            bestScore.text(` You were unable to beat the current High Score ${highScore} points BOOO!!`)

        }




    }

    function reLoadPage() {
        location.reload(htmlPage);
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