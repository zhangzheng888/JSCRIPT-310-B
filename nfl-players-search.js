// Clear any previous athlete in localStorage
StorageUtils.removeAthlete();

/*
 *  ESPN API - ATHLETES
 */

async function fetchAthletes(page, limit) {
  StorageUtils.removeAthlete();
  const response = await fetch(
    `https://sports.core.api.espn.com/v3/sports/football/nfl/athletes?page=${page}&limit=${limit}`
  );
  return await response.json();
}

/*
 *  SEARCH ATHLETES FUNCTIONALITY
 */

async function searchAthlete(playerName) {
  const limit = 6400; // Adjust the limit as needed
  const maxPages = 3; // Limit the search to 3 pages
  let athleteFound = false;

  // Total number of athletes is 18760, contains current and former players
  // Average total active size for the entire league is ~1876 players
  // Thus the reasoning for looping the limited and paginate is to limit API pulls while
  // keeping data at a manageable size. I find that pulling the entire list at once can cause localStorage errors between searches.

  for (let page = 1; page <= maxPages; page++) {
    try {
      const data = await fetchAthletes(page, limit);
      const athlete = data.items.find(
        (athlete) =>
          athlete.displayName.toLowerCase() === playerName.toLowerCase()
      );

      if (athlete) {
        // console.log(athlete.)
        // Construct NFL Player class for found athlete
        const nflPlayer = new NFLPlayer(
          athlete.id,
          athlete.active,
          athlete.displayName,
          athlete.age,
          athlete.displayHeight,
          athlete.displayWeight,
          athlete.experience
        );
        displayAthleteProfile(nflPlayer);
        athleteFound = true;

        // Store the athlete details also in localStorage
        StorageUtils.addAthlete(athlete);

        // Exit the loop if athlete is found
        break;
      }
    } catch (error) {
      console.error("Error fetching athletes:", error);

      // Put up the error message in an error profile card with default NFL logo
      displayErrorProfile()

      // Exit the function if there's an error
      return;
    }
  }

  if (!athleteFound) {
    displayNotFoundProfile(playerName);
  }
}