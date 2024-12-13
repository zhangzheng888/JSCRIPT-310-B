/**
 * Storage Utilities class to manage adding and removing athletes saved to localStorage.
 * 
 */

class StorageUtils {

    /**
     * Removes athlete from localStorage.
     *
     */

    static removeAthlete() {
        localStorage.removeItem("athlete");
    }

    /**
     * Creates athlete saved to localStorage.
     * @param {string} athleteData - The data of the found player to be saved.
     */

    static addAthlete(athleteData) {
        localStorage.setItem("athlete", JSON.stringify(athleteData));
    }

}