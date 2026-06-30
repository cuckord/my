const words = ["Java Developer.", "Software Engineer.", "Problem Solver."];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            const el = document.getElementById('typewriter');
            if(el) el.innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2500);
            return false;
        }
        timer = setTimeout(loopTyping, 80);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            const el = document.getElementById('typewriter');
            if(el) el.innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 600);
            return false;
        }
        timer = setTimeout(loopDeleting, 40);
    };
    loopDeleting();
}

function startCyberClockEngine() {
    const timeDisplay = document.getElementById('hud-live-time');
    const dateDisplay = document.getElementById('hud-live-date');
    
    if (!timeDisplay || !dateDisplay) return;

    function refreshTime() {
        const now = new Date();
        
        let hrs = String(now.getHours()).padStart(2, '0');
        let mins = String(now.getMinutes()).padStart(2, '0');
        let secs = String(now.getSeconds()).padStart(2, '0');
        timeDisplay.innerText = `${hrs}:${mins}:${secs}`;
        
        let day = String(now.getDate()).padStart(2, '0');
        let month = String(now.getMonth() + 1).padStart(2, '0');
        let year = now.getFullYear();
        dateDisplay.innerText = `${day}.${month}.${year}`;
    }

    refreshTime();
    setInterval(refreshTime, 1000);
}

function initTechMatrixTracking() {
    const cards = document.querySelectorAll('.cyber-skill-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const boundingBox = card.getBoundingClientRect();
            const posX = e.clientX - boundingBox.left;
            const posY = e.clientY - boundingBox.top;
            
            card.style.setProperty('--mouse-x', `${posX}px`);
            card.style.setProperty('--mouse-y', `${posY}px`);
        });
    });
}

window.addEventListener("load", () => {
    setTimeout(() => {
        if(document.getElementById('typewriter')){
            typingEffect();
        }
    }, 100);
    startCyberClockEngine();
    initTechMatrixTracking();
});
