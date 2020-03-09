$(document).ready(function () {
    
    $("#startButton").on("click", startQuiz)
    function startQuiz() {
        console.log("start");
        $("#startButton").attr("class","hide");

    }
});
