"use strict";

// alert("Hello");


// let userName = Dima,
//     userAge = 26;

// console.log("userName" + userAge);

// Практика ч1.

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// // let a = prompt('Один из последних просмотренных фильмов?', ''),
// //     b = prompt('На сколько оцените его?', ''),
// //     c = prompt('Один из последних просмотренных фильмов?', ''),
// //     d = prompt('На сколько оцените его?', '');

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

    
// }




// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >=30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);

// Циклы

let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
}


// let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 50);


// let num = 50;
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


function calc(g, h) {
    return(g + h);
}

console.log(calc(5, 4));

let calcSecond = function(a, b) {
    return(a * b);
};

console.log(calcSecond(4, 7));

const logg = "How are you?";

console.log(logg.slice(5, 11));

console.log(logg.substring(5, 11));

const num = 12.2;
console.log(Math.round(num)); // округляет число

const test = "12.2px";
console.log(parseInt(test)); // возвращает число из строки с округлением
console.log(parseFloat(test)); // возвращает число из строки