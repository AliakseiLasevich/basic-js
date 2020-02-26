//The 14C/12C ratio in living organisms is 1.3 × 10−12, with a decay rate of 15 dpm/g
/* The half-life for this reaction is 5700 ± 30 yr.*/
//для реакций первого порядка время полувыведения реагента:
// t1/2 = 0,693 / k
// k = 0,693 / t1/2
// t = ln(N0/N) / k

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string' ||
        typeof sampleActivity === NaN ||
        typeof sampleActivity === "undefined" ||
        (/[^0-9\.]/g).test(sampleActivity) ||
        sampleActivity <= 0 ||
        sampleActivity > MODERN_ACTIVITY
    ) {
        return false;
    }
    let period = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));

    return period;
};
