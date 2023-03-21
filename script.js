const questions = document.querySelectorAll(".question");

questions.forEach(q => {
    q.addEventListener("click", () => {
        const currActive = document.querySelector(".question.active");
        if(currActive && currActive !== q){
            currActive.classList.toggle("active");
            currActive.nextElementSibling.style.maxHeight = 0;
        }
        q.classList.toggle("active");
        const answer = q.nextElementSibling;
        if(q.classList.contains("active")){
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    });
})

