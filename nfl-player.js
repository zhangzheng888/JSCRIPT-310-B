/**
 * Generic player class.
 * 
 */

class Player {

    /**
     * Creates a new player.
     * @param {string} league - The league the player belongs to.
     */

    constructor(league){
        this.league = league;
    }
}

/**
 * Represents an NFL player.
 * @extends Player
 */

class NFLPlayer extends Player {

    /**
     * Creates a new NFL player.
     * @param {string} playerID - The ID of the player.
     * @param {string} playerStatus - The status of the player. ('true' or 'false')
     * @param {string} playerName - The name of the player.
     * @param {number} playerAge - The age of the player.
     * @param {string} playerHeight - The height of the player.
     * @param {string} playerWeight - The weight of the player.
     * @param {number} playerYOE - The years of experience of the player.
     */

    constructor(playerID, playerStatus, playerName, playerAge, playerHeight, playerWeight, playerYOE) {
        super('NFL');
        this.playerID = playerID;
        this.playerStatus = playerStatus;
        this.playerName = playerName;
        this.playerAge = playerAge;
        this.playerHeight = playerHeight;
        this.playerWeight = playerWeight;
        if (playerYOE && playerYOE.years !== undefined) {
            this.playerYOE = playerYOE.years;
        } else {
            this.playerYOE = 'N/A';
        }
    }

    /**
     * Gets the URL for the player's headshot.
     * @returns {string} The URL of the player's headshot.
     */

    getHeadShotURL() {
        return `https://a.espncdn.com/i/headshots/nfl/players/full/${this.playerID}.png`
    }

    /**
     * Gets the URL for NFL Logo.
     * @returns {string} The URL of the NFL logo.
     */

    getDefaultNFLURL() {
        return 'https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg'
    }
}