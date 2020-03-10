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
        $("#highscore").append(" "+currentHighscore);
        $("#question").attr("class", "unhide col-6");$("#question").text(codeQuestions[0].question);
        // $("#ans1").attr("class", "unhide col-6 btn btn-info btn-hover btn-pill");$("#question").text(codeQuestions[0].answerA);
        // $("#ans2").attr("class", "unhide col-6 btn btn-info btn-hover btn-pill");$("#question").text(codeQuestions[0].answerB);
        // $("#ans3").attr("class", "unhide col-6 btn btn-info btn-hover btn-pill");$("#question").text(codeQuestions[0].answerC);
        $("#secandMInDisplay").text("Min  and  Sec");





        

    }

});
