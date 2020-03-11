$(document).ready(function () {

    var totalSeconds;
    var currentHighscore = 500;
    var i=0;  // this is to move through different questions's
    var j=0;  // this is to move through different answers's



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

    ];

    $("#startButton").on("click", startQuiz)
    function startQuiz() {

        $("#highscore").append(" " + currentHighscore);
        for (i = 0; i < codeQuestions.length; i++) {
console.log(i);
console.log(j);


            $("#startButton").attr("class", "hide");
            $("#question").attr("class", "unhide margin"); $("#question").text(codeQuestions[i].question);
            $("#ans1").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans1").text(codeQuestions[i].answers[j].text);
            $("#ans2").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans2").text(codeQuestions[i].answers[j + 1].text);
            $("#ans3").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans3").text(codeQuestions[i].answers[j + 2].text);
            $("#ans4").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans4").text(codeQuestions[i].answers[j + 3].text);
            var minutesAndSeconds = "Minutes and Seconds"
            $("#secandMin").attr("class", "unhide text-center"); $("#secandMin").text(minutesAndSeconds);


            $("#ans1").on("click", checkAnswer);
            $("#ans2").on("click", checkAnswer);
            $("#ans3").on("click", checkAnswer);
            $("#ans4").on("click", checkAnswer);
        };
    }

function checkAnswer() {
    var score = 0
    if (i = codeQuestions.length) {
        console.log('done');
    }
    else {
        console.log('not done');
    }
    // if (correct === true) {
    //     confirm("Your answer was correct");
    //     score = score + 1000 - totalSeconds;
    //     return (score)
    // }
    // else (correct === false) {
    //     confirm("Your answer was WRONG");
    //     score = score - totalSeconds;
    //     return (score)

    console.log("in checkanswer function");
    $("#secandMin").text("getting closer");
    nextQuestion();

};



function nextQuestion() {
    i = 0; e = 0;
    i++; e++;
    $("#startButton").attr("class", "hide");
    $("#highscore").append(" " + currentHighscore);
    $("#question").attr("class", "unhide margin"); $("#question").text(codeQuestions[i].question);
    $("#ans1").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans1").text(codeQuestions[i].answers[e].text);
    $("#ans2").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans2").text(codeQuestions[i].answers[e + 1].text);
    $("#ans3").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans3").text(codeQuestions[i].answers[e + 2].text);
    $("#ans4").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans4").text(codeQuestions[i].answers[e + 3].text);
    var minutesAndSeconds = "Minutes and Seconds"
    $("#secandMin").attr("class", "unhide text-center"); $("#secandMin").text(minutesAndSeconds);


    $("#ans1").on("click", checkAnswer);
    $("#ans2").on("click", checkAnswer);
    $("#ans3").on("click", checkAnswer);
    $("#ans4").on("click", checkAnswer);
    checkAnswer();


}


}

    // function nextQuestion() {
    //     for (i = 1; i++;)
    //     var score = 0

    //     console.log("in checkanswer function")
    //     $("#secandMin").text("getting closer");


    // }







);
