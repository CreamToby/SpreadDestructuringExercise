// SpreadDestructuringExercise

// 1a
const mcuShows = [`Loki`, `Moon Knight`];

// 1b
const starWarsShows = [`The Mandalorian`, `The Book of Boba Fett`];

// 1c
const disneyPlusShows = [
    ...mcuShows, 
    ...starWarsShows,
    `The Beatles: Get Back`    
];

// 1d
console.log(disneyPlusShows);

// 2a
const netflixMovies = {
    action: `Extraction`,
    crime: `The Irishman`
};

// 2b
const amazonPrimeMovies = {
    action: `The Tomorrow War`,
    drama: `One Night In Miami`
};

// 2c 
const streamingMovies = {
    ...netflixMovies,
    ...amazonPrimeMovies,
    musical: `Hamiltom`
};

// 2d
console.log(streamingMovies);

// 3a
const disneyJunior = [`Mickey Mouse Clubhouse`, `Spidey and His Amazing Friends`];

// 3b
const [mickey, spidey] = disneyJunior;

// 3c
// console.log(mickey);
// console.log(spidey);
console.log(mickey, spidey);

// 4a
const avengers = {
    warMachine: `James Rhodes`,
    theHulk: `Bruce Banner`
};

// 4b
const {warMachine, theHulk} = avengers;

// 4c
// 
// console.log(warMachine);
// console.log(theHulk);
console.log(warMachine, theHulk);

// 4d
const moreAvengers = {
    blackWidow: `Natasha Romanoff`,
    hawkeye: `Clint Barton`,
    ironMan: `Tony Stark`
};

// 4e
// 
/*const {
    blackWidow: nat,
    hawkeye: cli,
    ironMan: ton
} = moreAvengers;*/
const { blackWidow: nat, ...others} = moreAvengers;

// 4f
// 
// console.log(nat);
// console.log(cli);
// console.log(ton);
console.log(nat, ...others);

// BONUS
const bonus = {
    first: [1, 2, 3],
    second: [4, 5, 6],
    third: [7, 8, 9]
};

// 5a
// const all = {
    // ...bonus.first
// };
// console.log(all);

// const {first, second, third} = bonus;
// const all = [
    // first, second, third
// ];
// console.log(all);

// const fi = [...bonus.first];
// console.log(fi);
// const se = [...bonus.second];
// const th = [...bonus.third];
// const all = [fi, se, th];
// console.log(all);

// ANSWERS
const {first, second, third} = bonus;
const all = [...first, ...second, ...third];
console.log(all);

// or
// const first = bonus.first;
// const second = bonus.second;
// const third = bonus.third;
// const all = [...first, ...second, ...third];
// console.log(all);

// or
// const all = [
    // ...bonus[`first`],
    // ...bonus[`second`],
    // ...bonus[`third`]
// ];
// console.log(all);

// or
// const all = [
    // ...bonus.first,
    // ...bonus.second,
    // ...bonus.third
// ];
// console.log(all);

// 5b
const [one, two, three, four, five, six, seven, eight, nine] = all;

// or
// const [one, two, three] = bonus.first;
// const [four, five, six] = bonus.second;
// const [seven, eight, nine] = bonus.third;

console.log(one, two, three, four, five, six, seven, eight, nine);
