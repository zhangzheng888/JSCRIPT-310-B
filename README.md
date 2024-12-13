# JSCRIPT 310 B Final Project - NFL Player Search

Requirements:

1. Your project must be interactive (i.e. must have event listeners).  The user must be able to interact with the document with the mouse or keyboard and have the document change / update.

2. Your project must include 4 of the 6 following features (but may include more):

- One or more Classes (must use static methods and/or prototype methods)
- Write testable code, use Jasmine unit tests
- One or more timing functions
- One or more fetch requests to a 3rd party API
- Sets, updates, or changes local storage
- Contains form fields, validates those fields

## Project Overview

This project is an interactive NFL Player Search application that allows users to search for NFL players and view their details. The application includes various features such as event listeners, class inheritance, unit testing, API integration, and local storage management.

## Features Implemented
### Classes

A generic Player class was created, which is inherited by the NFLPlayer class.

```javascript
class Player {
    constructor(league){
        this.league = league;
    }
}

class NFLPlayer extends Player {

   constructor(playerID, playerStatus, playerName, playerAge, playerHeight, playerWeight, playerYOE) {
        super('NFL');
        ...
    }
...
    getHeadShotURL() {
        return `https://a.espncdn.com/i/headshots/nfl/players/full/${this.playerID}.png`
    }
```

## Unit Testing

Unit tests are written using Jasmine to ensure the functionality of the NFLPlayer class.

```javascript
describe('NFLPlayer', () => {

    let player;

    beforeEach(() => {
        player = new NFLPlayer('2330', 'false', 'Tom Brady', '47', '6\'4"', '225 lbs', '23');
    });

    it('should create an inactive or retired NFL player with the correct properties', () => {
        expect(player.league).toBe('NFL');
...
    });
});
```

### ESPN API

The application uses the ESPN Athletes API V3, which does not require an API key, to fetch player data.

### Form Validation

There is form validation to allow only letters, periods, hyphens, spaces, and apostrophes.

### LocalStorage Implementation

A separate class, StorageUtils, is used to manage local storage operations, making the code reusable across different parts of the application.

```javascript
class StorageUtils {
...
    static addAthlete(athleteData) {
        localStorage.setItem("athlete", JSON.stringify(athleteData));
    }

}
```

## Future Improvements/Enhancements

* Add a Search History
* Store entire list from ESPN as IndexedDB
* Correlate Team Roster + Position to each athlete 

## License

[MIT](https://choosealicense.com/licenses/mit/)