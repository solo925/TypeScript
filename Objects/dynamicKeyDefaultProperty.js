"use strict";
// @ts-expect-error science should be provided
const scores = {
    math: 95,
    english: 90,
};
scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
console.log(scores);
