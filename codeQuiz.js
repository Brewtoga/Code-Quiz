$(document).ready(function () {

    var currentHighscore = 500;
    var testTimer;
    var i;  // this is to move through different questions's
    var timerPerQuestion = [];
    var answer = [];
    var totalSeconds = 0;
    var totalScore = 0;
    var score = 0;



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

    $("#startButton").on("click", startQuiz)

    function startQuiz() {
        $("#ans1").on("click", nextQuestion);
        $("#ans2").on("click", nextQuestion);
        $("#ans3").on("click", nextQuestion);
        $("#ans4").on("click", nextQuestion);

        $("#startButton").attr("class", "hide");

        i = 0;
        var counter = 0;
        var minutes = 0;

        function startTimer() {
            counter = 0;
            testTimer = setInterval(function () {
                totalSeconds++
                counter++;
                console.log(counter);
                if (counter === 59) {
                    minutes++;
                    counter = 0;
                }
                $("#seconds").attr("class", "unhide"); $("#seconds").text(counter + " seconds");
                $("#minutes").attr("class", "unhide"); $("#minutes").text(minutes + " minutes");
                return (totalSeconds);

            }, 1000);
        };

        function endTimer() {

            for (var c = 0; c < answer.length;) {

                console.log(answer[c]);
                console.log(totalSeconds);
                if (answer[c] == 1) {
                    score = 1000;
                }
                else {
                    score = 0;
                }

                totalScore = ((totalScore + score) - totalSeconds);
                if (totalScore > currentHighscore)
                    localStorage.setItem('highScore', currentHighscore);
                console.log(totalScore);
                c++
            }

            clearInterval(testTimer);

        }






        function checkAnswer(ans) {
            console.log("question: " + i + ", counterValue = " + counter);
            timerPerQuestion.push(counter);

            endTimer();
            for (var j = 0; j < codeQuestions[i - 1].answers.length; j++) {
                if (ans == codeQuestions[i - 1].answers[j].ans) {
                    if (codeQuestions[i - 1].answers[j].correct) {
                        answer.push(1);
                    } else {
                        answer.push(0);
                    }
                }

            }

        };



        function nextQuestion(id) {

            if (i > 0) {
                console.log(id.target.id);
                checkAnswer(id.target.id);
            }

            if (i < codeQuestions.length) {

                $("#question").attr("class", "unhide margin"); $("#question").text(codeQuestions[i].question);
                $("#ans1").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans1").text(codeQuestions[i].answers[0].text);
                $("#ans2").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans2").text(codeQuestions[i].answers[1].text);
                $("#ans3").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans3").text(codeQuestions[i].answers[2].text);
                $("#ans4").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans4").text(codeQuestions[i].answers[3].text);
                startTimer();


            }
            if (i == codeQuestions.length) {
                endGame();
            }

            i++;

        }
        nextQuestion();

        function endGame() {
            console.log(answer);
            console.log(timerPerQuestion);
            // $("#startButton").attr("class", "unhide col-3 btn btn-info btn-hover btn-pill text-center");
            $("#question").attr("class", "hide");
            $("#ans1").attr("class", "hide");
            $("#ans2").attr("class", "hide");
            $("#ans3").attr("class", "hide");
            $("#ans4").attr("class", "hide");
            $("#minutes").attr("class", "hide");
            $("#seconds").attr("class", "hide");
        }


    };

});



