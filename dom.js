const form = document.getElementById("player-search-form");
const clear = document.getElementById("clear");

const profileContainer = document.getElementById("player-profile-container");

/*
 *  PLAYER CARD FUNCTIONS
 */

function displayAthleteProfile(athlete) {
  const headshotURL = athlete.getHeadShotURL();
  const defaultNFLURL = athlete.getDefaultNFLURL();

  let yoeText = "";
  let statusText = "";

  // Only display YOE if the player is active
  // Player status will use red or green circle indicators instead of true/false
  if (athlete.playerStatus) {
    yoeText = `<p class="card-text">Years of Experience: ${athlete.playerYOE}</p>`;
    statusText = '<span class="status-circle status-active"></span> Active';
  } else {
    statusText =
      '<span class="status-circle status-inactive"></span> Inactive/Retired';
  }

  if (headshotURL)

  profileContainer.innerHTML = `
        <div class="card">
            <img src="${headshotURL}" class="card-img-top img-fluid" onerror="this.onerror=null;this.src='${defaultNFLURL}';this.classList.add('error-image');">
            <div class="card-body">
                <h5 class="card-title">${athlete.playerName}</h5>
                <p class="card-text">Age: ${athlete.playerAge}</p>
                <p class="card-text">Weight: ${athlete.playerWeight}</p>
                <p class="card-text">Height: ${athlete.playerHeight}</p>
                <p class="card-text">Active: ${statusText}</p>
                ${yoeText}
            </div>
        </div>
    `;
}

function displayNotFoundProfile(playerName) {
  profileContainer.innerHTML = `
              <div class="card">
              <div class="image-container">
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg" class="card-img-top img-fluid error-image">
                  </div>
                  <div class="card-body">
                      <h2 class="card-title">${playerName} not found</h2>
                      <p class="card-text">Please check the spelling and try again.</p>
                  </div>
              </div>
          `;
}

function displayErrorProfile() {
  profileContainer.innerHTML = `
                <div class="card">
                <div class="image-container">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg" class="card-img-top img-fluid error-image">
                    <div class="card-body">
                    </div>
                        <h2 class="card-title">Error fetching athletes.</h2>
                        <p class="card-text">Please try again later.</p>
                    </div>
                </div>`;
}

/*
 *  EVENT LISTENERS
 */

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const playerName = document.getElementById("name").value.trim();
    searchAthlete(playerName);
  });

  clear.addEventListener("click", (event) => {
    event.preventDefault();
    profileContainer.innerHTML = "";
    form.reset();
    StorageUtils.removeAthlete();
  });
});
