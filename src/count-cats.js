module.exports = function countCats(matrix) {
    let cats = 0;
    matrix.forEach(function (item) {
        let ears = item.filter(function (cat) {
            return cat == "^^";
        });
        cats += ears.length;
    });

    // return matrix.flatMap(array => array.filter(function (cat) {
    //     return cat == "^^";
    // })).length;
    return cats;
};
