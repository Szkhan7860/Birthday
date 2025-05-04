function showMessage() {
    document.getElementById("message").style.display = "block";
    startConfetti(); // Activate confetti effect
}

function toggleMusic() {
    let music = document.getElementById("birthdayMusic");
    music.paused ? music.play() : music.pause();
}

function updateCountdown() {
    const birthday = new Date("May 5, 2025").getTime();
    const now = new Date().getTime();
    const timeLeft = birthday - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `🎈 Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s 🎈`;

    setTimeout(updateCountdown, 1000);
}

updateCountdown();

// Slideshow functionality
let slides = document.querySelectorAll('.slide');
let index = 0;

function showNextSlide() {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
    index = (index + 1) % slides.length;
}

setInterval(showNextSlide, 3000);
showNextSlide();

// 🎊 Confetti Effect
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

function startConfetti() {
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`,
            size: Math.random() * 5 + 2,
            speedY: Math.random() * 5 + 2
        });
    }
    requestAnimationFrame(updateConfetti);
}

function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.speedY;
        if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(updateConfetti);
}