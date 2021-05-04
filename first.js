"use strict";

// alert("Hello");


// let userName = Dima,
//     userAge = 26;

// console.log("userName" + userAge);

// Практика ч1.

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


// Циклы

let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
}


let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 50);


let num = 50;
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break; // перкращает цикл, выходит из него
    }
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue; // Пропускает i === 6
    }
    console.log(i);
}