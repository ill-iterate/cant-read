let questions = document.getElementsByClassName('question');

let i;
let numOfOn = 0;
let spacing = 0;

for(i=0;i<questions.length; i++) {
    
    questions[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let answer = this.nextElementSibling;
        let arrow = this.querySelector('.arrow');
        
        if (answer.style.height === "2.5rem" || answer.style.height === "4rem") {
            answer.style.height = "0";
            answer.style.borderBottom = "none";
            arrow.style.transform = 'rotate(0deg)';
            this.style.borderBottom = "1px solid hsl(240, 5%, 91%)";
            numOfOn--;
        } else {
            if (numOfOn > 0) {
                document.querySelectorAll(".answer").forEach(a=>a.style.height = "0");
                document.querySelectorAll('.question').forEach(a=>a.classList.remove('active'))
                document.querySelectorAll(".arrow").forEach(a=>a.style.transform = "rotate(0deg)");
                this.classList.add('active');
                answer.style.borderBottom = "1px solid hsl(240, 5%, 91%)";
                this.style.borderBottom = "none";
                arrow.style.transform = 'rotate(180deg)';
                if (window.screen.width < 1000) {
                    spacing = "4rem";
                } else {
                    spacing = "2.5rem";
                }
                answer.style.height = spacing;
            } else {
                arrow.style.transform = 'rotate(180deg)';
                answer.style.borderBottom = "1px solid hsl(240, 5%, 91%)";
                this.style.borderBottom = "none";
                if (window.screen.width < 1000) {
                    spacing = "4rem";
                } else {
                    spacing = "2.5rem";
                }
                answer.style.height = spacing;
                numOfOn++;
            }
            
            
        }
        
    });
    
}
