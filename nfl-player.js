class Player {
    constructor(type){
        this.type = type;
    }
}

class NFLPlayer extends Player {
    constructor(type, playerID, playerName, playerAge, playerYOE) {
        super(type);
        this.playerID = playerID;
        this.playerName = playerName;
        this.playerAge = playerAge;
        this.playerYOE = playerYOE;
    }

    getHeadShotURL(id) {
        return `https://a.espncdn.com/i/headshots/nfl/players/full/${id}.png`
    }
}