// логические операторы

// -------  &&

console.log('I love JS' && 3) // последний true
console.log('I love JS' && 3 && true) // последний true
console.log('I love JS' && 0 && true) //первый false

let minPrice = 100
let maxPrice = 200
let currentPrice = 0

if (currentPrice >= minPrice && currentPrice <= maxPrice) {
 console.log(`Этот товар я могу купить сейчас`)   
} else {
    console.log(`Эта цена не подходит`)
}

// -------  ||

console.log("true" || true) // первый true
console.log("true" || false) // первый true
console.log(0 || false || NaN) // последний false

// -------  !

console.log(!true)
console.log(!`Hi`)
console.log(!NaN)

let enterPrompt = null
if (!enterPrompt) {
    console.log('Пользователь нажал отмена')
}

// !!
console.log(!!1)

// -------  ВЕТВЛЕНИЯ

// 1- если
// if (condition) {
//     statement 
// }

// 2- если и все остальные случаи
// if (condition) {
//     statement 
// } else {
//     statement 
// }

let age = 16
if (age >= 18) {
    console.log(`Вам можно`)
} else {
    console.log(`Вам нельзя`)
    }
    
// Алтернатива if...else - тернарный оператор
// (condition) ? true : false
age >= 18 ? console.log(`Вам можно`) : console.log(`Вам нельзя`)

// 3- множественные условия
// if (condition) {
//     statement 
// } else if (condition) {
//     statement 
// } else if (condition) {
//     statement 
// } else {
//     statement 
// }

let a = 22
// if (a > 0 && a <= 5) {
//   console.log(`0-5`)
// } else if (a > 5 && a <= 10) {
//   console.log(`6-10`)
// } else if (a > 10 && a <= 15) {
//   console.log(`11-15`)
// } else {
//     console.log(`more then 15`)
// }

switch (a) {
  case a > 0 && a <= 5:
    console.log(`0-5`)
    break
  case a > 5 && a <= 10:
    console.log(`6-10`)
    break
  default:
  console.log(`switch more then 15`)
}


// SWITCH алтернатива множественного ветвления
let day = 'sat'
switch (day) {
  case 'mon':
  case 'tue':
  case 'wed':
  case 'thu':
  case 'fri':
    console.log(`${day} - будний день`)
    break
  default:
    console.log('Это выходной!')
}


// is NaN
// если реально не число - true
// если число - false

console.log(isNaN(NaN)) // true
console.log(isNaN('NaN')) // true
console.log(isNaN('true')) // true

console.log(isNaN('false')) // true
// console.log(Number('false')) // NaN => true


// если число - фолс
console.log(isNaN(0)) // false
console.log(isNaN(1)) // false
console.log(isNaN(1000000)) // false

console.log(isNaN(Infinity)) // false
console.log(isNaN('Infinity')) // false
console.log(isNaN('0')) // false
console.log(isNaN(0.4)) // false
console.log(isNaN('0.4')) // false

console.log(isNaN(true)) // false
console.log(isNaN(false)) // false

// ------- циклы

// const max = 10
// let y = 1

// while (y < max) {
//   y = y + 1
//   console.log(y)
// }


const max = 10
let y = 10
let i = 0

while (y < max) {
  y = y + 1
  i += 1
  console.log(`итерация - ${i}:`, y)
}
do {
  y = y + 1
  i += 1
  console.log(`итерация - ${i}:`, y)
} while (y < max)

// ЦИКЛ СО СЧЕТЧИКОМ
// local i || j || k
//   старт   условие до    шаг итерации
//                       i++
//                       i = i + 1
for (let i = 0; i <= 10; i += 1) {
  if (i % 2 === 0) {
    console.log(`continue ${i}`)
    continue
  }
}

for (let i = 0; i <= 10; i += 2) {
  if (i % 2 === 0) {
    console.log(` break ${i}`)
    break
  }
}
