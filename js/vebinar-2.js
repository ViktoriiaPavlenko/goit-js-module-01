// const stars = 7;
// let price;

// // if (stars === 1) {
// //     price = 20;
// // } else if (stars === 2) {
// //     price = 30;
// // } else if (stars === 3) {
// //     price = 50;
// // } else if (stars === 4) {
// //     price = 70;
// // } else if (stars === 5) {
// //     price = 120;
// // } else {
// //     console.log('Такого кол-ва звезд нет')
// // }

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//       console.log('Такого кол-ва звезд нет')  
// }

// console.log(price);



// const stars = 2;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 50;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звезд нет')
// }

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 50;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//       console.log('Такого кол-ва звезд нет')  
// }

// console.log(price);


// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }



// const minSalary = 500;
// const maxSalary = 1000;
// const employees = 7;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП работника номер ${i},  - ${salary}`);

//     totalSalary += salary;
// }
// console.log('totalSalary: ', totalSalary);



// const min = 6;
// const max = 14;
// let total = 0;

// // for (let i = min; i <= max; i += 1) {
// //     console.log(i);
// //     if (i % 2 === 0) {
// //         console.log('Чётное: ', i);

// //         total += i;
// //     }
// // }
// // console.log('total: ', total);

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         // console.log('Не чётное: ', i);
//         continue;
//     }

//     console.log('Чётное: ', i);
//      total += i;
// }
// console.log('total: ', total);
 


// let balance = 1000;
// const payment = 2000;
// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во средств на счету`);
// if (payment <= balance) {
//     console.log('ok');
    
//     balance -= payment;
//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log(`На счету недостаточно средств для проведения операции!`);
// }
//  console.log('Операция завершена');




const totalSpent = 40;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
    console.log('Бронзовый партнер скидка 2%');
    discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    console.log('Серебрянный партнер скидка 5%');
    discount = 0.05;
} else if (totalSpent >= 5000) {
    console.log('Золотой партнер скидка 10%');
    discount = 0.1;
} else {
    console.log(`Не партнер, скидка 0%`);
}
console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);
