$(document).ready(function () {


    var currentHighscore = 500;
    const codeQuestions = [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            answers: [
                {text:'js', correct: false},
                {text:'javascripting', correct: false},
                {text:'scripting', correct: false},
                {text:'script', correct: true},
            ]
        },
        
    ];

    $("#startButton").on("click", startQuiz)
    function startQuiz() {
        i = 0
        e=0
        $("#startButton").attr("class", "hide");
        $("#highscore").append(" " + currentHighscore);
        $("#question").attr("class", "unhide margin"); $("#question").text(codeQuestions[i].question);
        $("#ans1").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans1").text(codeQuestions[i].answers[e].text);
        $("#ans2").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans2").text(codeQuestions[i].answers[e+1].text);
        $("#ans3").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans3").text(codeQuestions[i].answers[e+2].text);
        $("#ans4").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans4").text(codeQuestions[i].answers[e+3].text);
        var minutesAndSeconds = "Minutes and Seconds"
        $("#secandMin").attr("class", "unhide text-center"); $("#secandMin").text(minutesAndSeconds);


        $("#ans1").on("click", checkAnswer);
        $("#ans2").on("click", checkAnswer);
        $("#ans3").on("click", checkAnswer);
        $("#ans4").on("click", checkAnswer);


        function checkAnswer() {
            var score = 0

            console.log("in checkanswer function")
            $("#secandMin").text("getting closer");
        

        }







    }

});
