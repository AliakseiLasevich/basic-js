module.exports = function createDreamTeam(members) {
    try {
        return members
            .filter(member => typeof member == 'string')
            .map(member => member.trim().charAt(0).toUpperCase())
            .sort()
            .join("");
    } catch (e) {
        return false;
    }

};