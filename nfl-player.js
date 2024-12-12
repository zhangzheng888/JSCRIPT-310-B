class Player {
    constructor(league){
        this.league = league;
    }
}

class NFLPlayer extends Player {
    constructor(league, playerID, playerName, playerAge, playerHeight, playerWeight, playerYOE) {
        super(league);
        this.playerID = playerID;
        this.playerName = playerName;
        this.playerAge = playerAge;
        this.playerHeight = playerHeight;
        this.playerWeight = playerWeight;
        this.playerYOE = playerYOE;
    }

    getHeadShotURL(id) {
        return `https://a.espncdn.com/i/headshots/nfl/players/full/${id}.png`
    }
}