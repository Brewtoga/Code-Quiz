$(document).ready(function () {

    var totalSeconds;
    var seconds = 0;
    var currentHighscore = 500;
    var i;  // this is to move through different questions's
    // var j=0;  // this is to move through different answers's



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

        $("#startButton").attr("class", "hide");
        // var myVar = setInterval(myTimer, 1000);

        // function myTimer() {
        //   var d = new Date();
        //   var t = d.toLocaleTimeString();
        //   document.getElementById("demo").innerHTML = t;
        // }

        // function myStopFunction() {
        //   clearInterval(myVar);
        // }
        var counter = 0;
        var minutes = 0;
        setInterval(function () {

            counter++;
            console.log(counter);
            //   $("#seconds").attr("class", "unhide text-center");$("#seconds").text(counter+" seconds");
            //   $("#minutes").attr("class", "unhide text-center");$("#minutes").text(minutes+" minutes");



            //   if (counter === 59) {
            //       minutes++;
            //       counter = 0;
            //      }

            //         $("#minutes").attr("class", "unhide text-center"); $("#minutes").text(`${minutes} minutes and ${counter} seconds`);
            //         if (minutes === 3){
            // $().text(minutes+" minutes");
            // $("#seconds").text(counter+" seconds");
            // clearInterval(timerOverall);
            //  }

        }, 1000);

        // var stopTimer = setInterval(myTimer, 1000);

        //     function myTimer() {
        //         seconds = 0;
        //         seconds++;
        //         var secondM = seconds;


        //     };


        function firstQuestion() {
            $("#highscore").append(" " + currentHighscore);
            i = 0;

            // console.log(i);
            $("#question").attr("class", "unhide margin"); $("#question").text(codeQuestions[i].question);
            $("#ans1").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans1").text(codeQuestions[i].answers[0].text);
            $("#ans2").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans2").text(codeQuestions[i].answers[1].text);
            $("#ans3").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans3").text(codeQuestions[i].answers[2].text);
            $("#ans4").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans4").text(codeQuestions[i].answers[3].text);

            checkAnswer();

        };
        firstQuestion();




        function checkAnswer() {
            $("#ans1").on("click", nextQuestion);
            $("#ans2").on("click", nextQuestion);
            $("#ans3").on("click", nextQuestion);
            $("#ans4").on("click", nextQuestion);
            // var score = 0
            // if (i = codeQuestions.length) {
            //     console.log('done');
            // }
            // else {
            //     console.log('not done');
            // }
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

            // nextQuestion();

        };



        function nextQuestion() {

            i++;
            $("#startButton").attr("class", "hide");
            $("#question").attr("class", "unhide margin"); $("#question").text(codeQuestions[i].question);
            $("#ans1").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans1").text(codeQuestions[i].answers[0].text);
            $("#ans2").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans2").text(codeQuestions[i].answers[1].text);
            $("#ans3").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans3").text(codeQuestions[i].answers[2].text);
            $("#ans4").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans4").text(codeQuestions[i].answers[3].text);


            // $("#ans1").on("click", checkAnswer);
            // $("#ans2").on("click", checkAnswer);
            // $("#ans3").on("click", checkAnswer);
            // $("#ans4").on("click", checkAnswer);
            checkAnswer();


        }


    };

    // function nextQuestion() {
    //     for (i = 1; i++;)
    //     var score = 0

    //     console.log("in checkanswer function")
    //     $("#secandMin").text("getting closer");


    // }

});



