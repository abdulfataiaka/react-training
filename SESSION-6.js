// scores = [10, 50, 80, 70, 20, 90]
// grades = [B, B, A, B, B, A]

// condition ? trueValue : falseValue
// score >= 80 ? 'A' : 'B'

const getGrades = (scores) => {
    const grades = scores.map((score) => {
        if (score >= 80) {
            return 'A';
        } else {
            return 'B';
        }
    });

    return grades;
};

const scores = [10, 50, 80, 70, 20, 90];
const grades = getGrades(scores);
// console.log(grades);


// times = ['00:30', '12:30', '09:00', '21:00', '18:00']
// periods = ['Morning', 'Afternoon', 'Morning', 'Evening', 'Evening']

const getPeriods = (times) => {
    const periods = times.map((time) => {
        const parts = time.split(':');
        const hourStr = parts[0];
        const hour = Number(hourStr);

        if (hour < 12) {
            return 'Morning';
        } else if (hour < 15) {
            return 'Afternoon';
        } else {
            return 'Evening'
        }
    });

    return periods;
}

const times = ['00:30', '12:30', '09:00', '21:00', '18:00']
// periods = ['Morning', 'Afternoon', 'Morning', 'Evening', 'Evening']
const periods = getPeriods(times);
console.log(periods);