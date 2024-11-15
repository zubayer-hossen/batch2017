document.addEventListener("DOMContentLoaded", () => {
    const fullscreenButton = document.getElementById("fullscreen-btn");
    const reloadButton = document.getElementById("reload-btn");
    const darkModeButton = document.getElementById("dark-mode-btn");
    const videoElement = document.getElementById("video");
    const volumeControl = document.getElementById("volume");
    const speedControl = document.getElementById("speed");
    const countdownTimer = document.getElementById("timer");

    // Dark Mode Toggle
    darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeButton.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
    });

    // Fullscreen Button
    fullscreenButton.addEventListener("click", () => {
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
            videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
            videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
            videoElement.msRequestFullscreen();
        }
    });

    // Reload Button
    reloadButton.addEventListener("click", () => {
        window.location.reload();
    });

    // Volume Control
    volumeControl.addEventListener("input", () => {
        videoElement.volume = volumeControl.value;
    });

    // Playback Speed Control
    speedControl.addEventListener("change", () => {
        videoElement.playbackRate = parseFloat(speedControl.value);
    });

    // Countdown Timer
    function updateTimer() {
        const eventDate = new Date("2024-11-30T18:00:00");
        const currentTime = new Date();
        const timeRemaining = eventDate - currentTime;

        if (timeRemaining <= 0) {
            countdownTimer.textContent = "The event has started!";
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            countdownTimer.textContent = `${days}d ${hours}h ${minutes}m`;
        }
    }
    setInterval(updateTimer, 1000);
});
