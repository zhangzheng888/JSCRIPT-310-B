fetch(
  "https://sports.core.api.espn.com/v3/sports/football/nfl/athletes?limit=20000"
)
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("nflAthletes", JSON.stringify(data));
  })
  .catch((error) => console.error("Error fetching data:", error))
  .finally(() => console.log("DONE"));

const storedNFLData = localStorage.getItem('nflAthletes');
const resdata = JSON.parse(storedNFLData);
const athletes = resdata.items;
console.log(athletes);