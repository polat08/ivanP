console.log( NaN || 2 || undefined );//2
console.log( NaN && 2 && undefined );//NAN
console.log( 1 && 2 && 3 );//3
console.log( !1 && 2 || !3 );//false
console.log( 25 || null && !3 );//25
console.log( NaN || null || !3 || undefined || 5);//5
console.log( NaN || null && !3 && undefined || 5);//5
console.log( 5 === 5 && 3 > 1 || 5);//true

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}//DONE!

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}//Done!

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
} //not work

//triangle stars
let result = '';
const length = 7;
for (let i = 1; i < length; i++) {
  for(let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n'
}
console.log(result);

function firstTask() {
   for(let i =5; i <=10; i++) {
       console.log(i)
   }
    
    
}
firstTask();

function secondTask() {
   for(let i = 20; i >= 10; i --) {
    if(i === 13) break;
       console.log(i)
   }
    
}
secondTask();
function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

thirdTask();

function fourthTask() {
    let i = 2;

    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
        }
        i++;
    }
}

fourthTask();

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask();

function firstTaskk() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
      
    // Пишем решение вот тут
    
    for(let i = 0; i < arr.length; i++) {
      result[i] = arr[i];
    }
    console.log(result);
    // Не трогаем
    return result;
} firstTaskk();


const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
  for(let j = 0; j < lines - i; j++) {
    result += ' ';
  }
  for (let j = 0; j < 2 * i + 1; j++){
    result += '*';
  }
  result += '\n';
}

console.log(result);


const usdCurr = 29;
const discount = 0.9;

function convert(amount, curr) {
  return curr * amount;
}
function promotion (result) {
  console.log(result * discount);
}
const res = convert(500, usdCurr);
promotion(res);



   