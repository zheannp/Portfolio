const toggle = document.getElementById("darkModeToggle");

toggle.onclick = function(){
    document.body.classList.toggle("dark-mode");
};

// Typing Text Effect
const text = "I'm Zhean";
const typed = document.getElementById("typed");
let index = 0;

function type() {
    if (index < text.length) {
        typed.textContent += text.charAt(index);
        index++;
        setTimeout(type, 200); // speed of typing (200ms)
    }
}

// Start typing when page loads
window.onload = type;

// Scroll reveal for skills
const skills = document.querySelectorAll(".fade-in");

function revealSkills() {
    const triggerBottom = window.innerHeight * 0.85;

    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;

        if(skillTop < triggerBottom) {
            skill.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSkills);
window.addEventListener("load", revealSkills);