// TO STRING

// ------- ЧИСЛО К СТРОКЕ
let value = 0;

// 1й способ (с использованием конструктора String)
let toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

value = 1;
// 1й способ (с использованием конструктора String)
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// Infinity К СТРОКЕ
value = Infinity;
// 1й способ (с использованием конструктора String)
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// NaN К СТРОКЕ
value = NaN;
// 1й способ (с использованием конструктора String)
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// ------- BOOLEAN TO STRING
// true к строке 
value = true;
// 1й способ (с использованием конструктора String)
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// false к строке 
value = false;
// 1й способ (с использованием конструктора String)
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// ------- UNDEFINED TO STRING

value = undefined;
// 1й способ (с использованием конструктора String)
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);

// -------- NULL TO STRING  
value = null;
// 1й способ (с использованием конструктора String)
toString = String(value);
console.log(`${value}, через конструктор String(): `, toString);
console.log(`тип данных ${value}, через конструктор String(): `, typeof toString);

// 2й способ (конкатенация)
toString = value + "";
console.log(`${value}, через конкатенацию: `, toString);
console.log(`тип данных ${value}, через конкатенацию: `, typeof toString);
