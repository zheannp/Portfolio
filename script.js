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

const skillInfo = {
  HTML: "HTML (HyperText Markup Language) is used to structure web pages.",
  CSS: "CSS (Cascading Style Sheets) is used to style web pages.",
  JavaScript: "JavaScript makes web pages interactive.",
  Java: "Java is a general-purpose programming language used for apps and systems."
};

const skillElements = document.querySelectorAll('.skill');
const skillCard = document.getElementById('skill-card');

skillElements.forEach(skill => {
  skill.addEventListener('click', () => {
    const skillName = skill.textContent.trim(); // e.g., "HTML"
    const info = skillInfo[skillName];
    
    skillCard.innerHTML = `
      <h3>${skillName}</h3>
      <p>${info}</p>
    `;
    
    skillCard.style.display = 'block'; // show the card
    
  });
});

const responses = {
  // Greetings
  "hello": "Hi! I'm Chatbot Zee 🤖, your interactive guide.",
  "hi": "Hello there! Ask me about my skills, projects, or programming in general.",
  "hey": "Hey! I’m Zee’s portfolio chatbot. Try asking about HTML, CSS, JavaScript, Java, or projects.",

  // Skills
  "html": "HTML (HyperText Markup Language) is used to structure the content of web pages.",
  "css": "CSS (Cascading Style Sheets) is used to style web pages, from colors to layout.",
  "javascript": "JavaScript makes web pages interactive, handling user actions and animations.",
  "java": "Java is a general-purpose programming language used for apps, systems, and backend development.",
  
  // Projects
  "projects": "I have projects like ZWorkout (Java workout guide), Grade Portal (school system), and Responsive Web Design projects from freeCodeCamp.",

  // Learning
  "web development": "I’m currently learning web development, focusing on responsive design, HTML, CSS, and JavaScript.",
  "full stack": "I aspire to become a Full-Stack Developer, building both front-end and back-end applications.",
  
  // Portfolio guidance
  "how do i use this": "Just type a skill or project name, like 'HTML', 'CSS', 'JavaScript', 'Java', or 'projects'.",
  "help": "Try typing 'HTML', 'CSS', 'JavaScript', 'Java', 'projects', or ask about my learning path.",

  // Fun
  "who are you": "I’m Chatbot Zee 🤖, a simple interactive chatbot in this portfolio!",
  "what is your name": "I’m called Zee’s Chatbot. Nice to meet you!",
  "zee": "That's my master! Check out the contact section to get in touched with my master 😆",

  // Default
  "default": "Sorry, I don’t know about that yet. Try asking about my skills or projects!"
};

const input = document.getElementById("chat-input");
const output = document.getElementById("chat-output");
const chatbotSection = document.getElementById("chatbot");
let hintShown = false;

// Function to show hint
function showHint() {
  if (!hintShown) {
    hintShown = true;

    const hintTyping = document.createElement("p");
    hintTyping.classList.add("typing", "hint");
    hintTyping.innerHTML = `<strong>Zee:</strong> Hello! I’m Chatbot Zee 🤖. A simple interactive chatbot. Try asking me about HTML, CSS, JavaScript, Java, or my projects. Just use simple keywords—I’m not an advanced AI 😆.`;
    output.appendChild(hintTyping);
    output.scrollTop = output.scrollHeight;

    // simulate typing delay
    setTimeout(() => {
      hintTyping.classList.remove("typing"); // stops dots animation
    }, 2000);
  }
}

// Detect scroll into view
window.addEventListener("scroll", () => {
  const rect = chatbotSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    showHint();
  }
});

// Function to send user message
function sendMessage() {
  const msg = input.value.trim().toLowerCase();
  if (!msg) return;

  // show user message
  const userMsg = document.createElement("p");
  userMsg.innerHTML = `<strong>You:</strong> ${input.value}`;
  output.appendChild(userMsg);

  input.value = "";

  // show bot typing
  const botTyping = document.createElement("p");
  botTyping.classList.add("typing");
  botTyping.innerHTML = `<strong>Zee:</strong> `;
  output.appendChild(botTyping);
  output.scrollTop = output.scrollHeight;

  // simulate typing delay
  setTimeout(() => {
    botTyping.classList.remove("typing");
    botTyping.innerHTML = `<strong>Zee:</strong> ${responses[msg] || responses["default"]}`;
    output.scrollTop = output.scrollHeight;
  }, 1200); // adjust delay to taste
}

// Detect scroll into view
window.addEventListener("scroll", () => {
  const rect = chatbotSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    showHint();
  }
});

// Observe when the chatbot section is in view
window.addEventListener("scroll", () => {
  const rect = chatbotSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    showHint();
  }
});

hintTyping.classList.add("hint");