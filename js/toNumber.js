// TO NUMBER

//------- STRING TO NUMBER
//любое строчное значение TO NUMBER 
let value = "Hello";

//1й способ (конструктор Number)
let toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

//2й способ (унарный плюс)
toNumber = +value; 
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

//строчное число TO NUMBER 
value = "6";

//1й способ (конструктор Number)
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных ${value}, через конструктор Number(): `, typeof toNumber);

//2й способ (унарный плюс)
toNumber = +value; 
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

//пустая строка TO NUMBER 
value = "";

//1й способ (конструктор Number)
toNumber = Number(value);
console.log(`пустая строка ${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных пустой строки ${value}, через конструктор Number(): `, typeof toNumber);

//2й способ (унарный плюс)
toNumber = +value; 
console.log(`пустая строка ${value}, через унарный +: `, toNumber);
console.log(`тип данных пустой строки ${value}, через унарный +: `, typeof toNumber);

//строка с пробелом TO NUMBER 
value = " ";

//1й способ (конструктор Number)
toNumber = Number(value);
console.log(`строка с пробелом ${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных строки с пробелом ${value}, через конструктор Number(): `, typeof toNumber);

//2й способ (унарный плюс)
toNumber = +value; 
console.log(`строка с пробелом ${value}, через унарный +: `, toNumber);
console.log(`тип данных строки с пробелом ${value}, через унарный +: `, typeof toNumber);

//------- BOOLEAN TO NUMBER

// true TO NUMBER  
value = true;

//1й способ (конструктор Number)
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных  ${value}, через конструктор Number(): `, typeof toNumber);

//2й способ (унарный плюс)
toNumber = +value; 
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// false TO NUMBER  
value = false;

//1й способ (конструктор Number)
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных  ${value}, через конструктор Number(): `, typeof toNumber);

//2й способ (унарный плюс)
toNumber = +value; 
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// // ------- UNDEFINED TO NUMBER

value = undefined;
//1й способ (конструктор Number)
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных  ${value}, через конструктор Number(): `, typeof toNumber);

//2й способ (унарный плюс)
toNumber = +value; 
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);

// // -------- NULL TO NUMBER  

value = null;
//1й способ (конструктор Number)
toNumber = Number(value);
console.log(`${value}, через конструктор Number(): `, toNumber);
console.log(`тип данных  ${value}, через конструктор Number(): `, typeof toNumber);

//2й способ (унарный плюс)
toNumber = +value; 
console.log(`${value}, через унарный +: `, toNumber);
console.log(`тип данных ${value}, через унарный +: `, typeof toNumber);