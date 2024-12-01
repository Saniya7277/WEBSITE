// Retrieve leaderboard data from localStorage or use default sample data
const leaderboardData = JSON.parse(localStorage.getItem("leaderboard")) || [
    { username: "Alice", score: 150 },
    { username: "Bob", score: 130 },
    { username: "Charlie", score: 120 }
];

// Function to display the leaderboard
function displayLeaderboard() {
    const leaderboardTable = document.getElementById('leaderboardTable').getElementsByTagName('tbody')[0];
    leaderboardTable.innerHTML = ''; // Clear current table rows

    leaderboardData.sort((a, b) => b.score - a.score); // Sort by score descending

    leaderboardData.forEach((player, index) => {
        const row = leaderboardTable.insertRow();
        row.insertCell(0).textContent = index + 1; // Rank
        row.insertCell(1).textContent = player.username; // Username
        row.insertCell(2).textContent = player.score; // Score
    });
}

// Function to add a player to the leaderboard
function addPlayer(username, score) {
    leaderboardData.push({ username, score });
    localStorage.setItem("leaderboard", JSON.stringify(leaderboardData));
    displayLeaderboard(); // Update the leaderboard display
}

// Handle the player form submission
document.getElementById('playerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const score = parseInt(document.getElementById('score').value.trim());

    if (username && score) {
        addPlayer(username, score);
        generateCertificate(username, score);
    }
});

// Function to reset the leaderboard
function resetLeaderboard() {
    localStorage.removeItem("leaderboard");
    leaderboardData.length = 0;
    displayLeaderboard();
}

// Function to generate a certificate
function generateCertificate(username, score) {
    const certificate = `
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 50px; border: 2px solid #34495e; border-radius: 10px; background-color: #ecf0f1; width: 70%; margin: 20px auto;">
            <h1>Certificate of Achievement</h1>
            <p style="font-size: 20px;">This is to certify that <strong>${username}</strong> has successfully completed the coding challenge and scored <strong>${score}</strong> points.</p>
            <p>Congratulations on your achievement!</p>
            <p><em>Date: ${new Date().toLocaleDateString()}</em></p>
        </div>
    `;

    const newWindow = window.open();
    newWindow.document.write(certificate);
    newWindow.document.close();
}

// Initialize leaderboard on page load
displayLeaderboard();
