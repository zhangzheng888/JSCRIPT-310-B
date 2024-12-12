
localStorage.removeItem("athlete");
// Total number of athletes is 18760

async function fetchAthletes(page, limit) {
  localStorage.removeItem("athlete");
  const response = await fetch(
    `https://sports.core.api.espn.com/v3/sports/football/nfl/athletes?page=${page}&limit=${limit}`
  );
  return await response.json();
}

async function searchAthlete(playerName) {
    const limit = 6400; // Adjust the limit as needed
    const maxPages = 3; // Limit the search to 3 pages
    let athleteFound = false;

    for (let page = 1; page <= maxPages; page++) {
        try {
            const data = await fetchAthletes(page, limit);
            const athlete = data.items.find(
                (athlete) => athlete.displayName.toLowerCase() === playerName.toLowerCase()
            );

            if (athlete) {
                displayAthleteProfile(athlete);
                athleteFound = true;
                localStorage.setItem("athlete", JSON.stringify(athlete));
                break; // Exit the loop if athlete is found
            }
        } catch (error) {
            console.error("Error fetching athletes:", error);
            document.getElementById("player-profile-container").innerHTML = `
                <div class="card">
                <div class="image-container">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg" class="card-img-top img-fluid error-image">
                    <div class="card-body">
                    </div>
                        <h2 class="card-title">Error fetching athletes.</h2>
                        <p class="card-text">Please try again later.</p>
                    </div>
                </div>`;
            return; // Exit the function if there's an error
        }
    }

    if (!athleteFound) {
        document.getElementById("player-profile-container").innerHTML = `
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
}

function displayAthleteProfile(athlete) {
  const headshotURL = `https://a.espncdn.com/i/headshots/nfl/players/full/${athlete.id}.png`;
  document.getElementById("player-profile-container").innerHTML = `
        <div class="card">
            <img src="${headshotURL}" class="card-img-top img-fluid">
            <div class="card-body">
                <h5 class="card-title">${athlete.displayName}</h5>
                <p class="card-text">Age: ${athlete.age}</p>
                <p class="card-text">Weight: ${athlete.displayWeight}</p>
                <p class="card-text">Height: ${athlete.displayHeight}</p>
                <p class="card-text">Active: ${athlete.active}</p>
            </div>
        </div>
    `;
}

/*
 *  EVENT LISTENERS
 */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("player-search-form");
  const clear = document.getElementById("clear");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const playerName = document.getElementById("name").value.trim();
    searchAthlete(playerName);
  });

  clear.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("player-profile-container").innerHTML = "";
    form.reset();
    localStorage.removeItem("athlete");
  });
});
