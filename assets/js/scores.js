//Need a function that takes the input (the final score and initials from the user). That comes from the gameStartOrEnd function. It is then saved on local storage and added to the leaderboard.

//6. The highscores page should allow for the scores to be cleared when the button is pressed.

//When the highscore button is clicked, the local storage/highscores and cleared and reset.

//retrieve from local storage and place scores on top of each other

function showHighscores() {
  // The code gets the scores from the localstorage or is set to an empty array.
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  // the highscores are sorted in descending order depending on the score.
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  for (var i = 0; i < highscores.length; i += 1) {
    // An li tag is created for every highscore.
    var liTag = document.createElement("li");
    liTag.textContent = highscores[i].initials + "-" + highscores[i].score;

    // The highscores are dispalyed on the page.
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  }
}

// Here the highdcores will be cleared when the button is pressed.
function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

// executes when the page loads.
showHighscores();
