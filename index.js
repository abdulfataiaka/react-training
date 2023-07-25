/*****************************/
// Arrays & Objects
/*****************************/

// These are complex data types in javascript for representing collection od data

const names = ['John', 'Abdulfatai', 'Tijani']; // Array<string> 

const human = {
    height: '5ft',
    skinColor: 'dark',
    weight: '10000kg',
};

/*****************************/
// Working With Arrays
/*****************************/

// For-In

const namesWithIndex = [];

for (let index in names) {
    const name = names[index];
    namesWithIndex.push([index, name]);
}

// console.log(namesWithIndex);

// For-Of

const namesWithAge = [];

for (let name of names) {
    const newName = `${name} (34)`;
    namesWithAge.push(newName);
}

// console.log(namesWithAge);

// Array.forEach(callback(item, index)) => undefined

const updatedNames = [];

names.forEach(function callback(name, index) {
    updatedNames.push([index, `${name} (34)`])
});

console.log(updatedNames);