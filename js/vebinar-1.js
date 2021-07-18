// let base = prompt('Давай число')
// base = Number(base)
// console.log(base);

// let power = prompt('Давай степень')
// power = Number(power)
// console.log(power);

// const result = base ** power
// console.log(result);



// console.log(Math.random());

// const max = 50
// const min = 30
// console.log(Math.random() * (max - min) + min);



const isOnline = true;
const isFriend = false;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log('Можно открыть чат? ', canOpenChat);

