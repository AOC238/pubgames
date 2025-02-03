document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("predictionForm");
    const guessHistory = document.getElementById("guessHistory");
  
    let guesses = JSON.parse(localStorage.getItem("guesses")) || [];
  
    function updateGuessStream() {
      guessHistory.innerHTML = guesses
        .map(
          (guess) => `
        <div class="guess-item">
          <strong>${guess.name}</strong> @ ${guess.time} <br />
          <span>${guess.match}: ${guess.scores}</span>
        </div>
      `
        )
        .join("<hr>");
    }
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const userName = document.getElementById("userName").value;
      const match = document.getElementById("matchSelector").value;
      const team1Score = document.getElementById("team1Score").value;
      const team2Score = document.getElementById("team2Score").value;
  
      if (!match) {
        alert("Please select a match!");
        return;
      }
  
      const newGuess = {
        name: userName,
        match,
        scores: `${team1Score} - ${team2Score}`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
  
      guesses.unshift(newGuess);
      guesses = guesses.slice(0, 5); // Keep only the latest 5 guesses
  
      localStorage.setItem("guesses", JSON.stringify(guesses));
      updateGuessStream();
      form.reset();
    });
  
    updateGuessStream();
  });
  