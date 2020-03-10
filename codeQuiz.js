$(document).ready(function () {

    $("#startButton").on("click", startQuiz)
    function startQuiz() {
        var i = 0; i++;
        var currentHighscore = 500;
        var codeQuestions = [
            {
                question: "Inside which HTML element do we put the JavaScript?",
                answerA: 'js',
                answerB: 'javascripting',
                answerC: 'scripting',
                answerD: 'script',
                correctA: 'script',
            },
            {
                question: 'What is the second Question?',
                answerA: 'A',
                answerB: 'B',
                answerC: 'C',
                answerD: 'D',
                correctA: 'C',
            },
            // {
            //     question: 'Inside which HTML element do we put the JavaScript?',
            //     answerA: 'js',
            //     answerB: 'javascripting',
            //     answerC: 'scripting',
            //     answerD: 'script',
            //     correctA: 'script',
            // },
            // {
            //     question: 'Inside which HTML element do we put the JavaScript?',
            //     answerA: 'js',
            //     answerB: 'javascripting',
            //     answerC: 'scripting',
            //     answerD: 'script',
            //     correctA: 'script',
            // },
            // {
            //     question: 'Inside which HTML element do we put the JavaScript?',
            //     answerA: 'js',
            //     answerB: 'javascripting',
            //     answerC: 'scripting',
            //     answerD: 'script',
            //     correctA: 'script',
            // },
            // {
            //     question: 'Inside which HTML element do we put the JavaScript?',
            //     answerA: 'js',
            //     answerB: 'javascripting',
            //     answerC: 'scripting',
            //     answerD: 'script',
            //     correctA: 'script',
            // },
        ];
        console.log("start");
        console.log(codeQuestions);
        console.log(codeQuestions[0].question);

        $("#startButton").attr("class", "hide");
        $("#highscore").append(" " + currentHighscore);
        $("#question").attr("class", "unhide"); $("#question").text(codeQuestions[0].question);
        $("#ans1").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans1").text(codeQuestions[0].answerA);
        $("#ans2").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans2").text(codeQuestions[0].answerB);
        $("#ans3").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans3").text(codeQuestions[0].answerC);
        $("#ans4").attr("class", "unhide btn btn-info btn-hover btn-pill"); $("#ans4").text(codeQuestions[0].answerD);
        var minutesAndSeconds = "Minutes and Seconds"
        $("#secandMin").attr("class", "unhide text-center"); $("#secandMin").text(minutesAndSeconds);


        $("#ans1").on("click", checkAnswer);
        $("#ans2").on("click", checkAnswer);
        $("#ans3").on("click", checkAnswer);
        $("#ans4").on("click", checkAnswer);


        function checkAnswer() {
            console.log("in checkanswer function")
            $("#secandMin").text("getting closer");
            
        }

            





    }

});
