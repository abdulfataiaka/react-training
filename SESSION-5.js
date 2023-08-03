/*

Given an array of students score information

I. Filter the array to include only students who scored above 85 in the given subject.
II. Calculate the average score for each student across all subjects.
III. Sort the filtered students in descending order based on their scores.
IV. Return an array containing the names of students with the highest scores.

*/

const studentsScores = [
    { name: 'Alice', subject: 'Math', score: 90 },
    { name: 'Bob', subject: 'Math', score: 85 },
    { name: 'Alice', subject: 'History', score: 78 },
    { name: 'Bob', subject: 'History', score: 92 },
    { name: 'Carol', subject: 'Math', score: 88 },
    { name: 'Carol', subject: 'History', score: 85 },
    { name: 'David', subject: 'Math', score: 95 },
    { name: 'David', subject: 'History', score: 88 },
];

const studentsAboveScore85 = studentsScores.filter(function callback(studentScore) {
    return studentScore.score > 85;
});

// console.log(studentsAboveScore85);

// Get the list of names
// Map through the names and for each one, compute the average score

const studentNames = studentsScores.map(function callback(studentScore) {
    return studentScore.name;
});

const uniqStudentNames = [];

studentNames.forEach(function callback(studentName) {
    if (!uniqStudentNames.includes(studentName)) {
        uniqStudentNames.push(studentName);
    }
});

const studentsWithAverageScore = uniqStudentNames.map(function callback(studentName) {
    const studentScoreObjs = studentsScores.filter(function callback(studentScore) {
        return studentScore.name === studentName;
    });

    const studentScores = studentScoreObjs.map(function callback(studentScoreObj) {
        return studentScoreObj.score;
    })

    let totalSum = 0;

    studentScores.forEach(function callback(studentScore) {
        totalSum = totalSum + studentScore; // totalSum += studentScore
    });

    const average = totalSum / studentScores.length;

    return [studentName, average];
});

console.log(studentsWithAverageScore);