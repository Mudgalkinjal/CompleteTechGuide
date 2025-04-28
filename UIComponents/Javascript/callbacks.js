// CALLBACKS 

// === MAP ===
const arr_map = [1, 2, 3, 4, 5];

const doubled_map = arr_map.map(elem => elem * 2);
console.log(doubled_map);

const submissions_map = [
  { user: 'Alice', times: [12, 10, 15], passed: [true, true, false] },
  { user: 'Bob',   times: [8, 7, 9], passed: [true, true, true] },
  { user: 'Cara',  times: [14, 13, 12], passed: [true, false, true] }
];

const submissions_stats_map = submissions_map.map(({ user, times, passed }) => ({
  user,
  stats: times.map((time, index) => ({
    attempt: index + 1,
    time,
    pass: passed[index]
  }))
}));
console.log(submissions_stats_map);

const students_map = [
  { name: 'Asha', scores: [80, 90, 70] },
  { name: 'Brian', scores: [60, 75, 85] },
  { name: 'Chloe', scores: [95, 85, 100] }
];

const subjects_list = ['Math', 'English', 'Science'];

const students_subjects_map = students_map.map(({ name, scores }) => ({
  name,
  subjects: scores.map((score, index) => ({
    subject: subjects_list[index],
    score
  }))
}));
console.log(students_subjects_map);

/*
[
  { name: 'Asha', subjects: [ { subject: 'Math', score: 80 }, { subject: 'English', score: 90 }, { subject: 'Science', score: 70 } ] },
  { name: 'Brian', subjects: [ … ] },
  { name: 'Chloe', subjects: [ … ] }
]
*/

// === FILTER ===
const numbers_filter = [3, 7, 10, 15, 22, 27];

const even_numbers_filter = numbers_filter.filter(num => num % 2 === 0);
console.log(even_numbers_filter);

const products_filter = [
  { name: 'Laptop', price: 1200 },
  { name: 'Phone', price: 700 },
  { name: 'Tablet', price: 400 },
  { name: 'Monitor', price: 300 }
];

const affordable_products_filter = products_filter.filter(({ price }) => price <= 500);
console.log(affordable_products_filter);

// === REDUCE ===
const numbers_reduce = [1, 2, 3, 4, 5];

const sum_reduce = numbers_reduce.reduce((acc, elem) => acc + elem, 5);
console.log(sum_reduce); // sum starting from 5

const product_reduce = [2, 3, 4].reduce((acc, elem) => acc * elem, 1);
console.log(product_reduce);

// === SOME ===
const has_even_some = numbers_reduce.some(elem => elem % 2 === 0);
console.log(has_even_some);

// === EVERY ===
const all_even_every = [2, 4, 6].every(elem => elem % 2 === 0);
console.log(all_even_every);

// === FIND ===
const first_even_find = numbers_reduce.find(elem => elem % 2 === 0);
console.log(first_even_find);

// === SORT ===
const products_sort = [
  { name: 'Laptop', price: 1200 },
  { name: 'Tablet', price: 400 },
  { name: 'Phone', price: 700 }
];

const sorted_products_sort = products_sort.sort((a, b) => a.price - b.price);
console.log(sorted_products_sort);

// === WORDS SORT ===
const animals_sort = ['zebra', 'monkey', 'apple', 'elephant'];

const alphabetical_animals_sort = animals_sort.sort();
console.log(alphabetical_animals_sort);
