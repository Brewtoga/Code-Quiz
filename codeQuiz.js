$(document).ready(function () {
    $("#startButton").on("click", function () {
        // setting up object for questions and answers
        var codeQuestions = [
            {
                question: "Who invented JavaScript?",
                answerA: "a: Douglas Crockford",
                answerB: "b: Sheryl Sandberg",
                answerC: "c: Brendan Eich",   //correct answer 
            },
            {
                question: "Which one of these is a JavaScript package manager?",
                answerA: "a: Node.js",
                answerB: "b: TypeScript",
                answerC: "c: npm",  //correct answer
            },

            {
                question: "Which tool can you use to ensure code quality?",
                answerA: "b: jQuery",
                answerB: "a: Angular",
                answerC: "c: ESLint",   //correct answer   
            },
        ];

        // for loop to run through the different questions
        for (i = 0; i < codeQuestions.length; i++) {

            
            
            var quizQuestion = codeQuestions[i].question;
            var quizAns1 = codeQuestions[i].answerA;
            var quizAns2 = codeQuestions[i].answerB;
            var quizAns3 = codeQuestions[i].answerC;

            // writing question to html page
            $("#question").text(quizQuestion);
            $("#ans1").text(quizAns1);
            $("#ans2").text(quizAns2);
            $("#ans3").text(quizAns3);

            var counter = 0;
            var minutes = 0;
            var totalSeconds = 0;
            var timerOverall = setInterval(function () {
                counter++
                totalSeconds++
                $("#seconds").text(counter + " seconds");

                $("#minutes").text(minutes + " minutes");

                if (counter === 59) {
                    minutes++;
                    counter = 0;
                }
                if (minutes === 3) {
                    $("#minutes").text(minutes + " minutes");
                    $("#seconds").text(counter + " seconds");
                }
                console.log(totalSeconds);

                },1000);
                clearInterval(timerOverall);

            // // event listners for answers
            // $("#ans1").on("click", function () {
            //     if (quizAns1 = true) {
            //         score = 1000;
            //         console.log(score);
            //     }
            //     else {
            //         score = 0;
            //         console.log(score);
            //     }
            // });
            // $("#ans2").on("click", function () {
            //     if (quizAns2 = true) {
            //         score = 1000;
            //         console.log(score);
            //     }
            //     else {
            //         score = 0;
            //         console.log(score);
            //     }
            // });
            // $("#ans3").on("click", function () {
            //     if (quizAns2 = true) {
            //         score = 1000;
            //         console.log(score);
            //     }
            //     else {
            //         score = 0;
            //         console.log(score);
            //     }
            // });


        }
    });

});
