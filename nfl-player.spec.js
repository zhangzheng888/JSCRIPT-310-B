
describe('NFLPlayer', () => {
    let player;

    beforeEach(() => {
        player = new NFLPlayer('3139477', 'true', 'Patrick Mahomes', '29', '6\'3"', '230 lbs', '8');
    });

    it('should create an NFL player with the correct properties', () => {
        expect(player.league).toBe('NFL');
        expect(player.playerID).toBe('3139477');
        expect(player.playerStatus).toBe('true');
        expect(player.playerName).toBe('Patrick Mahomes');
        expect(player.playerAge).toBe('29');
        expect(player.playerHeight).toBe('6\'3"');
        expect(player.playerWeight).toBe('230 lbs');
        expect(player.playerYOE).toBe('8');
    });


    it('should return the correct headshot URL', () => {
        const headshotURL = player.getHeadShotURL();
        expect(headshotURL).toBe('https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png');
    });
});


describe('NFLPlayer', () => {

    let player;

    beforeEach(() => {
        player = new NFLPlayer('2330', 'false', 'Tom Brady', '47', '6\'4"', '225 lbs', '23');
    });

    it('should create an inactive or retired NFL player with the correct properties', () => {
        expect(player.league).toBe('NFL');
        expect(player.playerID).toBe('2330');
        expect(player.playerStatus).toBe('false');
        expect(player.playerName).toBe('Tom Brady');
        expect(player.playerAge).toBe('47');
        expect(player.playerHeight).toBe('6\'4"');
        expect(player.playerWeight).toBe('225 lbs');
        expect(player.playerYOE).toBe('23');
    });

    it('should return the correct headshot URL', () => {
        const headshotURL = player.getHeadShotURL();
        expect(headshotURL).toBe('https://a.espncdn.com/i/headshots/nfl/players/full/2330.png');
    });
});

describe('NFLPlayer', () => {

    let player;

    beforeEach(() => {
        player = new NFLPlayer('897', 'false', 'Antonio Brown');
    });

    it('should create an inactive or retired NFL player with the correct properties', () => {
        expect(player.league).toBe('NFL');
        expect(player.playerID).toBe('897');
        expect(player.playerStatus).toBe('false');
        expect(player.playerName).toBe('Antonio Brown');
        expect(player.playerAge).toBe(undefined);
        expect(player.playerHeight).toBe(undefined);
        expect(player.playerWeight).toBe(undefined);
        expect(player.playerYOE).toBe(undefined);
    });

    it('should return the correct default nfl URL', () => {
        const defaultNFLURL = player.getDefaultNFLURL();
        expect(defaultNFLURL).toBe('https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg');
    });
});