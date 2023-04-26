// console.log( NaN || 2 || undefined );//2
// console.log( NaN && 2 && undefined );//NAN
// console.log( 1 && 2 && 3 );//3
// console.log( !1 && 2 || !3 );//false
// console.log( 25 || null && !3 );//25
// console.log( NaN || null || !3 || undefined || 5);//5
// console.log( NaN || null && !3 && undefined || 5);//5
// console.log( 5 === 5 && 3 > 1 || 5);//true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }//DONE!

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }//Done!

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// } //not work

// //triangle stars
// let result = '';
// const length = 7;
// for (let i = 1; i < length; i++) {
//   for(let j = 0; j < i; j++) {
//     result += '*';
//   }
//   result += '\n'
// }
// console.log(result);

// function firstTask() {
//    for(let i =5; i <=10; i++) {
//        console.log(i)
//    }
    
    
// }
// firstTask();

// function secondTask() {
//    for(let i = 20; i >= 10; i --) {
//     if(i === 13) break;
//        console.log(i)
//    }
    
// }
// secondTask();
// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// thirdTask();

// function fourthTask() {
//     let i = 2;

//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }

// fourthTask();

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask();

// function firstTaskk() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
      
//     // Пишем решение вот тут
    
//     for(let i = 0; i < arr.length; i++) {
//       result[i] = arr[i];
//     }
//     console.log(result);
//     // Не трогаем
//     return result;
// } firstTaskk();


// const lines = 5;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i <= lines; i++) {
//   for(let j = 0; j < lines - i; j++) {
//     result += ' ';
//   }
//   for (let j = 0; j < 2 * i + 1; j++){
//     result += '*';
//   }
//   result += '\n';
// }

// console.log(result);

// const usdCurr = 29;
// const discount = 0.9;

// function convert(amount, curr) {
//   return curr * amount;
// }
// function promotion (result) {
//   console.log(result * discount);
// }
// const res = convert(500, usdCurr);
// promotion(res);

//LexicalEnvironment
// function createFunction () {
//   let counter = 0;
//   const myFunction = function () {debugger
//     counter = counter + 1;debugger
//     return counter;debugger
//   }
//   return myFunction;
// }
// const increment = createFunction(); 
// const c1 = increment();debugger
// const c2 = increment();debugger
// const c3 = increment();debugger

// console.log(c1, c2, c3);
   
//interview tasks
//let x = 5; alert( x++ ); // 5 постфиксная форма сначала выводит исходное значение, а потом увеличивает
//[ ] + false - null + true; //NaN [] преобразуется в строку, строка + false = "false" - null = NaN + true = NaN
//let f = 1; 
//let g = f = 2; 
//alert(g); // 2 последовательное присваивание простых типов данных , справа на лево,т.е 2 присваивается f а потом g
//[ ] + 1 + 2; // '12'
//alert( '1'[0] ); // 1
//2 && 1 && null && 0 && undefined //null
//Есть ли разница между выражениями?
 //!!( a && b )  (a && b) // можно переписать так console.log(!!(1 && 2) === (1 && 2)) // false
                  
 //alert( null || 2 && 3 || 4 ); // 2 && 3 = 3 then null || 3 = 3

 //a = [1, 2, 3];
 //b = [1, 2, 3];// Правда ли что a == b ? NOOO!

 //alert( +'Infinity');// Infinity
 //Верно ли сравнение: 'Ёжик' > 'яблоко'? // false, unicode remember 

 //Чему равно 0 || "" || 2 || undefined || true || falsе ? // 2



 const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if ((+fDish.price.slice(0, -1) + (sDish.price)) > average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);


// рекурсия подсчитать прогресс всех студентов, метод Object.values()

let students = {
  js: [{
    name: 'John',
    progress: 100
  }, {
    name: 'Ivan',
    progress: 60
  }],
  html: {
    basic: [{
      name: 'Peter',
      progress: 20
    }, {
      name: 'Ann',
      progress: 18
    }],
    pro: [{
      name: 'Sam',
      progress: 10
    }],
     semi: {  // этот объект добавили после. первая функция не будет работать(ее нужно будет дорабатывать, но с рекурсией все работает) 
      students: [{
        name: 'test',
        progress: 50
      }]
    }
  }
};

function getTotalProgressByIteration(data) {
  let total = 0;
  let students = 0;

  for (let course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;
      
      for (let i = 0; i < course.length; i++) {
        total += course[i].progress;
      }
    } else {
      for (let subCourse of Object.values(course)) {
        students += subCourse.length;

        for (let i = 0; i < subCourse.length; i++) {
          total += subCourse[i].progress;
        }
      }
    }
  }

  return total/ students;
}

// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
      let total = 0;

      for (let i = 0; i < data.length; i++) {
        total += data[i].progress;
      }
      return [total, data.length];
    } else {
      let total = [0, 0];

      for (let subData of Object.values(data)) {
        const subDataArray = getTotalProgressByRecursion(subData);
        total[0] += subDataArray[0];
        total[1] += subDataArray[1];
      }
       return total;
    }
}
const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);
// рекурсия работает с любой вложенностью, т.е в объект можно сколько угодно добавлять новых объектов, массивов


// homework recursion task

function factorial(n) {
  if (typeof(n) !== 'number' || !Number.isInteger(n)) {
    return 'Error';
  }
  if(n >= 1) {
    return n * factorial(n -1);
  } else {
    return 1;
  }
  //  return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(9));


// classes 
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width); 
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, color: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 40, 'Hello', 'purple');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 20);
// const long = new Rectangle(50, 40);
// console.log(square.calcArea());
// console.log(long.calcArea());

// arrey methods

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(films) {
    return films.filter(item => item.rating >= 8);;
}
showGoodFilms();

function showListOfFilms(arr) {
    return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

showListOfFilms(films);

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

const tranformedArray = setFilmsIds(films);

// При срабатывании every на первом фильме он натыкается на id = 0;
// 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// Учитывайте этот момент
function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false)
}

// Еще короче, так как условие все равне вернет true или false:
// function checkFilms(arr) {
//     return arr.every(film => film.id || film.id === 0)
// }

// Максимально коротко, но еще читаемо:
// const checkFilms = (arr) => arr.every(film => film.id || film.id === 0)

checkFilms(tranformedArray);


//  Напишите функцию getPositiveIncomeAmount, которая принимает этот массив 
// данных и возвращает сумму только положительных значений из каждого объекта. (число)
const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0)
}

getPositiveIncomeAmount(funds);

// Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. 
//Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений.
//(число). Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.
const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
}

getTotalIncomeAmount(funds);
