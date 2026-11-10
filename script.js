
// SELECT ALL PAGES
const pages = document.querySelectorAll(".page");

// FUNCTION TO MOVE BETWEEN PAGES
function nextPage(pageId) {

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo(0, 0);
}


// NEXT PAGE BUTTONS
document.querySelectorAll("[data-next]").forEach(function(button) {

    button.addEventListener("click", function() {

        const next = button.getAttribute("data-next");
        nextPage(next);

    });

});


// FINAL SURPRISE BUTTON
const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", function() {

    document.getElementById("finalMessage").textContent =
        "KHuddd HUMAREEE LOBBBB!! 😭💗🫂";

    yesBtn.textContent = "Khuddd Lobbbb! 💕";
    yesBtn.disabled = true;

});


// RESTART BUTTON
document.getElementById("restartBtn").addEventListener("click", function() {

    document.getElementById("finalMessage").textContent = "";

    yesBtn.disabled = false;
    yesBtn.textContent = "Of course ❤️";

    nextPage("welcome");

});


// LOVE MUSIC PLAYER
const loveAudio = document.getElementById("loveAudio");
const playBtn = document.getElementById("playBtn");
const progressBar = document.getElementById("progressBar");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");


// FORMAT TIME
function formatTime(seconds) {

    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${String(secs).padStart(2, "0")}`;

}


// PLAY AND PAUSE
playBtn.addEventListener("click", async function() {

    if (loveAudio.paused) {

        try {

            // Load audio if it has not loaded yet
            if (loveAudio.networkState === HTMLMediaElement.NETWORK_EMPTY) {
                loveAudio.load();
            }

            await loveAudio.play();

        } catch (error) {

            console.error("Audio playback failed:", error);
            alert("Audio could not play. Please check the audio file path.");

        }

    } else {

        loveAudio.pause();

    }

});


// UPDATE BUTTON WHEN PLAYING
// UPDATE BUTTON WHEN PLAYING
loveAudio.addEventListener("play", function() {

    // STOP FIRST PAGE BACKGROUND MUSIC
    firstPageMusic.pause();

    playBtn.textContent = "Ⅱ";
    playBtn.setAttribute("aria-label", "Pause music");

});

loveAudio.addEventListener("pause", function() {
    playBtn.textContent = "▶";
    playBtn.setAttribute("aria-label", "Play music");
});


// AUDIO DURATION
loveAudio.addEventListener("loadedmetadata", function() {

    duration.textContent = formatTime(loveAudio.duration);

});


// UPDATE PROGRESS
loveAudio.addEventListener("timeupdate", function() {

    if (Number.isFinite(loveAudio.duration) && loveAudio.duration > 0) {

        progressBar.value =
            (loveAudio.currentTime / loveAudio.duration) * 100;

        currentTime.textContent =
            formatTime(loveAudio.currentTime);

    }

});


// SEEK AUDIO
progressBar.addEventListener("input", function() {

    if (Number.isFinite(loveAudio.duration)) {

        loveAudio.currentTime =
            (progressBar.value / 100) * loveAudio.duration;

    }

});


// RESET WHEN SONG ENDS
loveAudio.addEventListener("ended", function() {

    playBtn.textContent = "▶";
    progressBar.value = 0;
    currentTime.textContent = "0:00";

});


// AUDIO ERROR CHECK
loveAudio.addEventListener("error", function() {

    console.error("Audio loading error:", loveAudio.error);

    if (loveAudio.error) {
        console.error("Error code:", loveAudio.error.code);
    }

});
// FLOATING HEARTS ANIMATION
const heartsContainer = document.querySelector(".hearts-container");

const heartSymbols = ["💗", "💕", "💖", "❤️", "💘"];

for (let i = 0; i < 22; i++) {
    const heart = document.createElement("span");

    heart.classList.add("heart");

    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (14 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (7 + Math.random() * 8) + "s";

    heart.style.animationDelay =
        (Math.random() * 10) + "s";

    heartsContainer.appendChild(heart);
}

// OPENABLE LOVE LETTER

const envelope = document.getElementById("envelope");
const openLetterBtn = document.getElementById("openLetterBtn");
const letterPaper = document.getElementById("letterPaper");

openLetterBtn.addEventListener("click", function() {

    envelope.classList.toggle("open");
    letterPaper.classList.toggle("show");

    if (letterPaper.classList.contains("show")) {
        openLetterBtn.textContent = "Close My Letter 💗";
    } else {
        openLetterBtn.textContent = "Open My Letter 💌";
    }

});

// FLOATING HEARTS IN LOVE LETTER PAGE

const letterHearts = document.querySelector(".letter-hearts");

const letterHeartSymbols = ["💗", "💕", "💖", "❤️", "♡"];

for (let i = 0; i < 18; i++) {

    const heart = document.createElement("span");

    heart.classList.add("letter-heart");

    heart.textContent =
        letterHeartSymbols[
            Math.floor(Math.random() * letterHeartSymbols.length)
        ];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (14 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    heart.style.animationDelay =
        (Math.random() * 12) + "s";

    letterHearts.appendChild(heart);
}

// FIRST PAGE BACKGROUND MUSIC
const firstPageMusic = document.getElementById("firstPageMusic");

const welcomeButton = document.querySelector(
    '#welcome [data-next="apology"]'
);

welcomeButton.addEventListener("click", function () {
    firstPageMusic.play().catch(function (error) {
        console.log("Music could not start:", error);
    });
});
