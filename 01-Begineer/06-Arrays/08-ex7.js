const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3.0},
    { title: 'd', year: 2017, rating: 4.5},
];

const title = movies
    .filter(m=> (m.year ===2018 || m.year === 2017) && m.rating>=4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map (m=> m.title)

console.log(title);