// Define HQ at 42nd street
const hqStreet = 42;

// Returns the distance in blocks from HQ
function distanceFromHqInBlocks(street) {
    return Math.abs(street - hqStreet);
}

// Returns the distance in feet from HQ (1 block = 264 feet)
function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

// Returns the distance travelled in feet between two locations
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

// Calculates the fare price based on distance travelled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        // Free sample for the first 400 feet
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        // Charges 2 cents per foot when distance is between 400 and 2000 feet
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        // Charges flat 25 dollars for a distance over 2000 feet
        return 25;
    } else {
        // Does not allow rides over 2500 feet
        return 'cannot travel that far';
    }
}
