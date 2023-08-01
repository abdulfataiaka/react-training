const statuses = [
    "system_enabled",
    "system_disabled",
    "customer_enabled",
    "customer_disabled",
]

// CHALLENGE 1 - APPROACH 1

// ==, ===, !=, !==, ||, &&

const result1 = [];

statuses.forEach(function callback(item) {
    if (item === "system_disabled" || item === "customer_disabled") {
        result1.push(item);
    }
})

// console.log(result1);

// CHALLENGE 1 - APPROACH 2

const result2 = [];

statuses.forEach(function callback(item) {
    if (item.endsWith("disabled")) {
        result2.push(item);
    }
})

// console.log(result2);

// CHALLENGE 1 - APPROACH 3

const result3 = statuses.filter(function callback(item) {
    return item.endsWith('disabled');
})

// console.log(result3);

// CHALLENGE 2

const students = [
    {firstName: "John",   lastName: "Doe",     score: 23},
    {firstName: "Jane",   lastName: "Akinola", score: 79},
    {firstName: "Abdulfatai",   lastName: "Aina",    score: 15},
    {firstName: "Basit",   lastName: "Aina",    score: 15},
    {firstName: "Olamide", lastName: "Oguntan", score: 65},
    {firstName: "Sanni",   lastName: "Tijani",  score: 65},
]



// CHALLENGE 2-1: Find that one student whose last name is Aina

const studentAina = students.filter(function callback(item) {
    return item.lastName === "Aina";
})

console.log(studentAina);



const result4 = students.map(function callback(item) {
    const fullName = `${item.firstName} ${item['lastName']}`;

    let grade = null;

    if (item.score >= 81 && item.score <= 100) {
        grade = "A";
    } else if (item.score >= 61 && item.score <= 80) {
        grade = "B";
    } else if (item.score >= 41 && item.score <= 60) {
        grade = "C";
    } else if (item.score >= 0 && item.score <= 40) {
        grade = "D";
    }

    return [fullName, grade];
});

// console.log(result4)