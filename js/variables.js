console.log(student); //undefined

var student = "Viktoriia";
console.log(student);

var count; //обьявление переменной без инициализации
console.log(count); //undefined

count = 1;
console.log(count); // 1
count = 2;
console.log(count); // 2

// console.log(number); //Uncaught ReferenceError: Cannot access 'number' before initialization
let number = 30;
console.log(number);

let age; //обьявление переменной без инициализации
console.log(age); //undefined

age = 18;
console.log(age);
age = 37;
console.log(age);


// console.log(userName); //Uncaught ReferenceError: Cannot access 'userName' before initialization
// const user; //Uncaught ReferenceError: Missing initializer in const declaration

const userName = "Emma";
console.log(userName);

// userName = "" //Uncaught TypeError: Assignment to constant variable.


