/*let BDay = [1955, 1, 24];
console.log(BDay);

let Age = moment().diff(BDay, 'years');
BDay = new Date(2026, 1, 24);
let DaysBeforeBDay = moment().diff(BDay, 'days');
console.log(BDay);
console.log(Age);
console.log(DaysBeforeBDay);
let BeforeBirthdayInteger = Math.abs(DaysBeforeBDay)

let i = -3.14;
let random = Math.random();

console.log(Math.floor(i));
console.log(Math.abs(i));
console.log(random);
*/

let BDay = [1955, 1, 24];
let Age = moment().diff(BDay, 'years');
NearestBDay = new Date(2026, 1, 24);
let DaysBeforeBDay = moment().diff(NearestBDay, 'days');
let BeforeBirthdayInteger = Math.abs(DaysBeforeBDay);

console.log(`Ты родился ${BDay[0]} года, ${BDay[1]+1} месяца, ${BDay[2]} числа.
Тебе сейчас ${Age} лет. 
Через ${BeforeBirthdayInteger} дней тебе будет ${Age+1} год!1!`)
