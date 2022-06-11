function quizz() {
    document.getElementById("button").onclick = function () {
        location.href = "quiz.html";
    };
}

function info() {
    document.getElementById("link").onclick = function () {
        gsap.fromTo('.info', { opacity: 0, duration: 2 }, { opacity: 1, duration: 2 })
    }
}