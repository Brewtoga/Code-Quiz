var codeQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
    }
];
// var test = "Happy Happy!!";
// console.log(codeQuestions);
// $("#testing").append(test);

var counter = 0;
var minutes = 0;
var timerOverall = setInterval(function(){
  console.log(counter);
  counter++
  $("#seconds").text(counter+" seconds");

  $("#minutes").text(minutes+" minutes");
  
  if (counter === 59) {
      minutes++;
      counter = 0;
     }
     if (minutes === 3){
        $("#minutes").text(minutes+" minutes");
        $("#seconds").text(counter+" seconds");
        clearInterval(timerOverall);
     }
     
}, 1000);
