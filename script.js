document.addEventListener("DOMContentLoaded", () => {
    const joinNowButton = document.getElementById("join-now-btn");

    joinNowButton.addEventListener("click", () => {
        const meetingLink = ""; // Set the meeting link here (leave it empty for now)

        if (meetingLink.trim() === "") {
            // alert("মিটিং লিঙ্ক এখনও প্রস্তুত নয়, দয়া করে অপেক্ষা করুন...");
            window.location.href = "waitingmeeting.html"; // Redirect to waiting page
        } else {
            alert("মিটিং রুমে নিয়ে যাওয়া হচ্ছে...");
            window.open(meetingLink, "_blank");
        }
    });
});
