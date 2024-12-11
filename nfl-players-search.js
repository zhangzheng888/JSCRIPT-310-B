// fetch(
//   "https://sports.core.api.espn.com/v3/sports/football/nfl/athletes?limit=7000"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     localStorage.setItem("nflAthletes", JSON.stringify(data));
//   })
//   .catch((error) => console.error("Error fetching data:", error))
//   .finally(() => console.log("DONE"));

// Total number of athletes is 18760

async function fetchAthletes(page, limit) {
  const response = await fetch(
        `https://sports.core.api.espn.com/v3/sports/football/nfl/athletes?page=${page}&limit=${limit}`
    );
    return await response.json();
}

// const storedNFLData = localStorage.getItem('nflAthletes');
// const resdata = JSON.parse(storedNFLData);
// const athletes = resdata.items;
// console.log(athletes);

function searchAthlete(playerName) {
    const limit = 6400; // Adjust the limit as needed
    const maxPages = 3; // Limit the search to 3 pages
    let athleteFound = false;

    for (let page = 1; page <= maxPages; page++) {
        fetchAthletes(page, limit)
            .then(data => {
                // Find the athlete in the current page
                const athlete = data.items.find(athlete => athlete.displayName.toLowerCase() === playerName);
                
                let storedAthelete = localStorage.setItem("athlete", JSON.stringify(athlete));
                
                // If the athlete is found, display their profile
                if (athlete) {
                    displayAthleteProfile(athlete);
                    athleteFound = true;
                } else {
                    // If this is the last page and the athlete is not found, display a not found message
                    if (page === maxPages && !athleteFound) {
                        document.getElementById('player-profile-container').innerHTML = '<p>Athlete not found.</p>';
                    }
                }
            })
            .catch(error => {
                // Handle any errors that occur during the fetch
                console.error('Error fetching athletes:', error);
                document.getElementById('player-profile-container').innerHTML = '<p>Error fetching athletes. Please try again later.</p>';
            });

        // Break the loop if the athlete is found
        if (athleteFound) break;
    }
}


function displayAthleteProfile(athlete) {
    const headshotURL = `https://a.espncdn.com/i/headshots/nfl/players/full/${athlete.id}.png`;
    document.getElementById('player-profile-container').innerHTML = `
        <div class="card">
            <img src="${headshotURL}" class="card-img-top img-fluid">
            <div class="card-body">
                <h5 class="card-title">${athlete.displayName}</h5>
                <p class="card-text">Age: ${athlete.age}</p>
                <p class="card-text">Weight: ${athlete.displayWeight}</p>
                <p class="card-text">Active: ${athlete.active}</p>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('player-search-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const playerName = document.getElementById('name').value.trim().toLowerCase();
        searchAthlete(playerName);
    });
});

// console.log(localStorage.length);
// localStorage.removeItem('nflAthletes');
// console.log(localStorage.length);
console.log(JSON.parse(localStorage.getItem('storedAthelete')));