/**
 * Function to sort the keys of a JSON object
 * @param {Object} json The JSON object to sort
 * @returns {Object} The sorted JSON object
 */
const sortKeys = (json) => {
    if (typeof json !== "object" || json === null) {
        return json;
    }
    if (Array.isArray(json)) {
        return json.map(sortKeys);
    }
    return Object.keys(json).sort().reduce((acc, key) => {
        acc[key] = sortKeys(json[key]);
        return acc;
    }, {});
};

// Export the function
module.exports = {sortKeys};