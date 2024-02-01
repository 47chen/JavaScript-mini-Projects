/* mimic fetch data by using setTimeout */
function getRequest(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "47chen.com") {
        resolve("Welcome to 47chen.com");
      } else {
        reject("it is not the right url");
      }
    }, 2000);
  });
}
// .then() .catch()
getRequest("47chen.com")
  .then((res) => console.log(res, "first request"))
  .catch((error) => error);

// // async await
const fetch = async () => {
  try {
    const data = await getRequest("47chen.com33");
    console.log(data, "second request");
  } catch (err) {
    console.log(err, "second request");
  }
};

/* 實現一個promise */
const myPromise = new Promise((resolve, reject) => {
  const condition = true;

  if (condition) resolve("resolve my promise!");
  else reject("Error fethcing data");
});

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

fetch();

/*  shallow copy and deep copy 
-- shallow copy : same reference, so if you change one value, the other would changed too

A object        -> same reference
Cloned A object ->
top level property pass by value
only the nested object in the object 
is pass by reference such as b
看65 66 67
strict checks for equality


-- deep copy: difference reference,
A object(小貓,2歲) -> a reference
B object(小貓,2歲) -> b reference

*/

/* 
- 幾個重點
1. '===' strict euqal even they share same reference, 
they are still distinct object, return false

2. Top Level Property 是pass by value -- ex. a:1
所以就算你改了original.a, shallowcopy的a也不會變

3. Nest object property 則是pass by reference(assign 新值會影響 reference)
*/
// function shallowCopy(obj) {
//   return Object.assign({}, obj);
// }
// const originalObject = { a: 1, b: { c: 2 } };
// const shallowCopiedObject = shallowCopy(originalObject);
//
// const shallowCopiedObject2 = { ...originalObject };
// console.log(shallowCopiedObject2 === shallowCopiedObject); // false
// console.log(shallowCopiedObject2.a === shallowCopiedObject.a); // true
// console.log(shallowCopiedObject2.b === shallowCopiedObject.b); // true
//  改一個b全都會改
// shallowCopiedObject2.b.c = 1000;
// console.log(originalObject); // { a: 1, b: { c: 1000 } }
// console.log(shallowCopiedObject); // { a: 1, b: { c: 1000 } }
// console.log(shallowCopiedObject2); // { a: 1, b: { c: 1000 } }

// console.log("Demonstrate top level property pass by value");
// console.log(originalObject === shallowCopiedObject); // false
// console.log(originalObject.a === shallowCopiedObject.a); // true
// originalObject.a = 100;
// console.log(originalObject.a); // 100
// console.log(shallowCopiedObject.a); // 1
// console.log("-----------------------------------------");
// console.log("Demonstrate nested object property pass by reference");
// originalObject.b.c = 3; // pass by reference except for top level property
// console.log(originalObject.b === shallowCopiedObject.b); // true
// console.log(shallowCopiedObject.b.c); // 3
// console.log(shallowCopiedObject); // c已變成3

/* Deep copy */
// const origin = { a: 1, b: 2, c: { d: 3 } };
// console.log(origin);
// console.log(JSON.stringify(origin)); // {"a":1,"b":2,"c":{"d":3}}
// const deepCopy = JSON.parse(JSON.stringify(origin));
// console.log(deepCopy); // { a: 1, b: 2, c: { d: 3 } }
// // test whether they have different reference
// origin.c.d = 5;
// origin.a = 1000;
// console.log(origin); // { a: 1000, b: 2, c: { d: 5 } }
// console.log(deepCopy); // { a: 1, b: 2, c: { d: 3 } }

/* 實作 promise.race */

// const promise1 = Promise.resolve(3);
// const promise2 = 3;
// const promise3 = new Promise((resolve, reject) => resolve("Error occur"));
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// const promises = [promise1, promise2, promise3, promise4];
// // console.log(promises);

// Promise.all([promises]).then((values) => console.log(values));

// function flattenArray(arr) {
//   return arr.reduce((output, curItem) => {
//     return output.concat(
//       Array.isArray(curItem) ? flattenArray(curItem) : curItem
//     );
//   }, []);
// }

// // Example usage:
// const nestedArray = [1, [2, [3, 4], 5], 6];
// const flattenedArray = flattenArray(nestedArray);

// console.log(flattenedArray);
// // Output: [1, 2, 3, 4, 5, 6]

// // 考古題 - Fetch Json -> add new Field -> filter value
const apiURL = "47chen.com";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    const addOneField = data.map((d) => {
      return { ...d, newField: "hello" };
    });

    const filterList = addOneField.filter((item) => item.age !== 28);
    console.log(filterList);
  })
  .catch((err) => console.log(err));

// function otter() {
//   let a = 3;
//   function inner(b) {
//     return a + b;
//   }
//   return inner;
// }

// const add1 = otter();
// console.log(add1(5));

// x = 100;
// y = 1000;
// hello();

// function hello() {
//   console.log(x);
//   console.log("hello");
//   console.log(y);
// }
// let y;
// var x;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("get the return data in 2 secnd");
//   }, 2000);
// });

// promise.then((res) => console.log(res)).catch((err) => console.log(err));

// const myfunction = async () => {
//   try {
//     const asyncPromise = await new Promise((res, rej) => {
//       setTimeout(() => {
//         res("get the return data in 1 second");
//       }, 1000);
//     });
//     // const data = await asyncPromise;
//     console.log(asyncPromise);
//   } catch (err) {
//     console.log(err);
//   }
// };

// myfunction();

// practice sleep functions
// function sleep(duration) {
//   console.log("213");
//   return new Promise((resolve, reject) => {
//     resolve("after", duration, "is bed time");
//   });
// }

// async function greeting() {
//   console.log("hello!");
//   await sleep(2000);
//   console.log("bye.");
// }

// setInterval(() => {
//   console.log("Tick Tock");
// }, 1500);

// greeting();
// const jsonString = '{"name": "Pavitr Prabhakar","age": 17,"city":"Mumbattan"}';
// const parsedObject = JSON.parse(jsonString);
// const jsonString2 = JSON.stringify(parsedObject);
// console.log(typeof jsonString2);
// console.log(typeof jsonString);
// console.log(typeof parsedObject);
// console.log(parsedObject);
// console.log(parsedObject.name); // Output: Pavitr Prabhakar
// console.log(parsedObject.age); // Output: 17
// console.log(parsedObject.city); // Output: Mumbattan

// console.log(typeof 0);
// console.log(typeof NaN);
// console.log(typeof false);

/* # call() apply() bind() */
function greet() {
  return `Hello I am ${this.name}`;
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// console.log("-----------.call() method -----------");
// // call() method, bind the object to 'this' given the invoked function
greet.call(person1);
console.log(greet.call(person1)); // Hello I am Alice

// // same as call() but accept 1個1個 argument
// // apply()
// console.log("-----------.apply() method -----------");
greet.apply(person2);
console.log(greet.apply(person2)); // Hello I am Bob
let personAlice = greet.apply(person1);
console.log(personAlice); // Hello I am Alice
console.log(typeof personAlice); // string -- since greet() return string

// console.log("-----------.bind() method -----------");
// // bind() method return a new function 永久綁定
const greetBob = greet.bind(person2);
ㄑ;
console.log(greetBob()); // Hello I am Bob
console.log(typeof greetBob); // functiuon
console.log(typeof greetBob()); // string

// // 不能再被更改了，see the following
console.log(greetBob("Alice")); // Hello I am Bob
const greetAlice = greetBob.bind(person1);
console.log(greetAlice()); // Hello I am Bob

/*  JS Related - https://www.youtube.com/watch?v=AHbAAnt9qsY*/

/* --- Closure --- */
function makeCounter() {
  let count = 0;
  // create a scope that the inner function can get the variable outside of it
  // like a inner private variable in other language
  return function () {
    count++;
    return count;
  };
}
const myCounter = makeCounter();
myCounter();
myCounter();
myCounter();
myCounter();
myCounter();
console.log(myCounter());

/* --- var, let, const --- */
function doStuff() {
  for (let i = 0; i < 10; i++) {
    var count = i;
    // let count2 = i;
    // const count3 = i;
  }
  console.log(count);
  // console.log(count2); // block scope cannot access variable
  // console.log(count3); // block scope  cannot access varialbe
}

doStuff(); // 9

/* --- Abort Controller such as debounce and throttle--- */

/* --- this, explanation +  --- */
// this refer different obj in javascript

const obj = {
  name: "bob",
  age: 10,
  birthday() {
    this.age++;
  },
};
obj.birthday(); // this is depend on how it invoked
console.log(obj.age); // 11

const f = obj.birthday;
f();
console.log(obj.age); // 10

/* arrow function */
const obj5 = {
  name: "bob",
  age: 10,
  birthday() {
    setTimeout(function () {
      console.log(this);
      this.age++;
    }, 500);
  },
};
obj5.birthday(); // this 指向setTimeout function
const obj2 = {
  name: "bob",
  age: 10,
  birthday() {
    setTimeout(() => {
      console.log(this);
      this.age++;
    }, 500);
  },
};
obj2.birthday(); // arrow function this refer the whole obj property

/* --- async await | Promise --- */
const p = new Promise((resolve, reject) => {
  // run async code, we can either call resolve or reject
  let someCondition = false;
  if (someCondition) {
    return reject(new Error("gg"));
  }
  resolve("hello");
});

p.then((res) => console.log(res)).catch((rej) => console.log(rej));
// promise chain -> so nasty, so we can use async await(語法糖
p.then((result) => {
  // if successful, run this, such as fetch the data by api
})
  .then((result2) => {
    // if successful, run this, such as process fetch data
  })
  .catch((err) => {
    // do error handling
  })
  .finally((results3) => {});

async function main() {
  try {
    const results = await p;
    // const processData = processFunc(results);
    console.log(results);
  } catch (err) {
    console.log(err);
  }
}

// main();

/* --- Higher Order Function | js scope--- */
// inner function can access variable outside of i

// parent0 scope
function makeCounter() {
  // parent1 scope
  return () => {
    // 2
    return () => {
      // 3
      return () => {};
    };
  };
}

/* --- class vs object --- */
// blue print of a object - CLASS
// object is like having an actual data
// class is like the blueprint to constrcut the object
class Person {
  #name; // private name in typeScript/Java
  #age; // private age in typeScript/Java
  #hobby;
  constructor(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }

  jump() {
    console.log(`${this.name} is jumping`);
  }
}

const bob = new Person("bob", 8, "swimming");
console.log(typeof bob);
console.log(bob);
console.log(bob.age);
console.log(bob.name);
console.log(bob.hobby);
bob.jump();

/* flaten array - LeetCode 2625 */
// array.flat() - data preprocessing
//
const people = [
  { name: "Mike", items: ["hammer", "axe"] },
  { name: "Steve", items: ["rock", "stick"] },
];

const allItems = people.map((p) => p.items).flat();
console.log(allItems);

/* Recursive flatten array */
const flat = function (arr, n) {
  if (n === 0) return arr; // recursive endpoint
  let res = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      res.push(...flat(element, n - 1));
    } else res.push(element);
  }

  return res;
};

/* 把recursive function包在裡面呼叫他 */
const flat2 = function (arr, n) {
  let res = [];
  const flattenArray = (ar, l) => {
    if (l === 0) return ar;
    for (const a of ar) {
      if (Array.isArray(a)) {
        flattenArray(a, l - 1);
      } else res.push(a);
    }
  };
  flattenArray(arr, n);
  return res;
};

const test = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

console.log(flat(test, 2));
console.log(flat2(test, 2));
