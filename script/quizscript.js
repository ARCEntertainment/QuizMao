var colorFals = '#8a3a3a'
var colorTrue = '#244f24'

function maoQuiz() {
    let quest1 = document.getElementById("quest1").value;
    let quest2 = document.getElementById("quest2").value;
    let quest3 = document.getElementById("quest3").value;
    let quest4 = document.getElementById("quest4").value;
    let quest5 = document.getElementById("quest5").value;


    let result1 = 0;
    let result2 = 0;
    let result3 = 0;
    let result4 = 0;
    let result5 = 0;


    switch (quest1) {
        case "rep1":
            result1 = 0;
            q1R1 = document.getElementById("q1R1").style.color = colorFals;
            q1R3 = document.getElementById("q1R3").style.color = colorTrue;
            break;
        case "rep2":
            result1 = 0;
            q1R2 = document.getElementById("q1R2").style.color = colorFals;
            q1R3 = document.getElementById("q1R3").style.color = colorTrue;
            break;
        case "rep3":
            result1 = 10;
            q1R3 = document.getElementById("q1R3").style.color = colorTrue;
            break;
        default:
            break;
    }
    switch (quest2) {
        case "rep1":
            result2 = 0;
            q2R1 = document.getElementById("q2R1").style.color = colorFals;
            q2R2 = document.getElementById("q2R2").style.color = colorTrue;
            break;
        case "rep2":
            result2 = 10;
            q2R2 = document.getElementById("q2R2").style.color = colorTrue;
            break;
        case "rep3":
            result2 = 0;
            q2R3 = document.getElementById("q2R3").style.color = colorFals;
            q2R2 = document.getElementById("q2R2").style.color = colorTrue;
            break;
        default:
            break;
    }
    switch (quest3) {
        case "rep1":
            result3 = 0;
            q3R1 = document.getElementById("q3R1").style.color = colorFals;
            q3R2 = document.getElementById("q3R2").style.color = colorTrue;
            break;
        case "rep2":
            result3 = 10;
            q3R2 = document.getElementById("q3R2").style.color = colorTrue;
            break;
        case "rep3":
            result3 = 0;
            q3R3 = document.getElementById("q3R3").style.color = colorFals;
            q3R2 = document.getElementById("q3R2").style.color = colorTrue;
            break;
        default:
            break;
    }
    switch (quest4) {
        case "rep1":
            result4 = 0;
            q4R1 = document.getElementById("q4R1").style.color = colorFals;
            q4R3 = document.getElementById("q4R3").style.color = colorTrue;
            break;
        case "rep2":
            result4 = 0;
            q4R2 = document.getElementById("q4R2").style.color = colorFals;
            q4R3 = document.getElementById("q4R3").style.color = colorTrue;
            break;
        case "rep3":
            result4 = 10;
            q4R3 = document.getElementById("q4R3").style.color = colorTrue;
            break;
        default:
            break;
    }
    switch (quest5) {
        case "rep1":
            result5 = 0;
            q5R1 = document.getElementById("q5R1").style.color = colorFals;
            q5R3 = document.getElementById("q5R3").style.color = colorTrue;
            break;
        case "rep2":
            result5 = 0;
            q5R2 = document.getElementById("q5R2").style.color = colorFals;
            q5R3 = document.getElementById("q5R3").style.color = colorTrue;
            break;
        case "rep3":
            result5 = 60;
            q5R3 = document.getElementById("q5R3").style.color = colorTrue;
            break;
        default:
            break;
    }
    quizResult.innerHTML = result1 + result2 + result3 + result4 + result5 + " " + "sur " + "100";
}



// if (quest1 == rep1) {
//     q1R1 = document.getElementById("q1R1").style.Color = "red";
//     q1R3 = document.getElementById("q1R1").style.Color = "green";
// }
// else if (quest1 == rep2) {
//     q2R2 = document.getElementById("q1R1").style.Color = "red";
//     q1R3 = document.getElementById("q1R1").style.Color = "green";
// }
// else {
//     q1R3 = document.getElementById("q1R1").style.Color = "green";
// }