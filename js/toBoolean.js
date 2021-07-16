// TO BOOLEAN

// ------- любое строчное значение к булю 
let value = "Hello";

//1й способ (конструктор Boolean)
let toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2й способ (двойное отрицание)
toBoolean = !!value; 
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//любое строчное число к булю 
value = "567";

//1й способ (конструктор Boolean)
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2й способ (двойное отрицание)
toBoolean = !!value; 
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

//пустая строка к булю 
value = "";

//1й способ (конструктор Boolean)
toBoolean = Boolean(value);
console.log(`пустая строка ${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных пустой строки ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2й способ (двойное отрицание)
toBoolean = !!value; 
console.log(`пустая строка ${value}, через !!: `, toBoolean);
console.log(`тип данных пустой строки ${value}, через !!: `, typeof toBoolean);

// строка с пробелом к булю 
value = " ";

//1й способ (конструктор Boolean)
toBoolean = Boolean(value);
console.log(`строка с пробелом  ${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных строки с пробелом  ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2й способ (двойное отрицание)
toBoolean = !!value; 
console.log(`строка с пробелом  ${value}, через !!: `, toBoolean);
console.log(`тип данных строки с пробелом  ${value}, через !!: `, typeof toBoolean);

// ------- число к булю 
value = 0;

//1й способ (конструктор Boolean)
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2й способ (двойное отрицание)
toBoolean = !!value; 
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);


value = 1;

//1й способ (конструктор Boolean)
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2й способ (двойное отрицание)
toBoolean = !!value; 
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);


// NaN to boolean
value = NaN;

//1й способ (конструктор Boolean)
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2й способ (двойное отрицание)
toBoolean = !!value; 
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// Infinity to boolean
value = Infinity;

//1й способ (конструктор Boolean)
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2й способ (двойное отрицание)
toBoolean = !!value; 
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// ------- UNDEFINED к булю 
value = undefined;

//1й способ (конструктор Boolean)
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2й способ (двойное отрицание)
toBoolean = !!value; 
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);

// ------- NULL к булю 
value = null;

//1й способ (конструктор Boolean)
toBoolean = Boolean(value);
console.log(`${value}, через конструктор Boolean(): `, toBoolean);
console.log(`тип данных ${value}, через конструктор Boolean(): `, typeof toBoolean);

//2й способ (двойное отрицание)
toBoolean = !!value; 
console.log(`${value}, через !!: `, toBoolean);
console.log(`тип данных ${value}, через !!: `, typeof toBoolean);