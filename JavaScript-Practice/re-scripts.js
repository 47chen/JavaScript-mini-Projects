/* 1. 🔥 Mock fetching data using promise - .then().catch() | async await try catch 🔥 */
// const fetchData = (url) => {
//   return new Promise((resolve, reject) => {
//     if (url === "47chen.com") {
//       setTimeout(() => {
//         resolve("Successfully fetch the data!");
//       }, 1000);
//     } else reject("Something went wrong");
//   });
// };
// const url1 = "47chen.com";
// const url2 = "48chen.com";
// // .then .catch
// fetchData(url1)
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));

// fetchData(url2)
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));

// // async await try catch
// const getRequest = async (url) => {
//   try {
//     const message = await fetchData(url);
//     console.log(message);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getRequest(url1);
// getRequest(url2);

// // Implement a new promise
// const myPromise = new Promise((resolve, reject) => {
//   const someCondition = true;
//   if (someCondition) {
//     setTimeout(() => {
//       resolve("resolve my promise");
//     }, 1000);
//   } else reject("Error fetching data");
// });

// async function resolveMyPromise() {
//   try {
//     const data = await myPromise;
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// resolveMyPromise();
// setTimeout(
//   () => console.log("* ------------------------------------- *"),
//   2000
// );
/* ------------------------------------- */
/* 2. 🔥 shallowCopy and deepyCopy 🔥

- 🟢 Shallow Copy : Same reference, let[] res = arr, res[i] change would also change arr[i]
-- but TOP LEVEL Property is pass by value, only the nested object in the object is pass by reference
- ⭕️ To Create Shallow Copy - const shallow_copy = Object.assign({}, originial_obj);


- 🟢 Deep Copy : difference reference
ex. A object(animal: 'cat, age:'2'); => A reference
ex. B object(animal: 'cat, age:'2'); => B reference
- ⭕️ To Create Deep Copy - const deep_copy = JSON.parse(JSON.stringify(original_obj))

*/
// function shallowCopy(originObj) {
//   return Object.assign({}, originObj);
// }
// const original_obj = { a: 1, b: { c: 2, d: { e: 5 } } };
// const shallow_copy = shallowCopy(original_obj);

// const unknownCopy = { ...shallow_copy };
// console.log("* ------------------------------------- *");
// console.log(shallow_copy === original_obj); // false
// console.log(shallow_copy == original_obj); // false
// console.log("* Compare top level props | nested obj in object | deep value *");
// console.log(shallow_copy.a === original_obj.a); // true
// console.log(shallow_copy.b === original_obj.b); // false ❌ // TRUE ✅ - top level props pass by value
// console.log(shallow_copy.b.d.e === original_obj.b.d.e); // false❌ // TRUE ✅ - top level props pass by value
// console.log("* ------Reference changed check ------ *");
// shallow_copy.a = 100;
// original_obj.a = 500;
// console.log(shallow_copy.a, original_obj.a); // 100, 500 since Top Level Props pass by value
// shallow_copy.b.c = 100000;
// console.log(shallow_copy, original_obj);
// { a: 100, b: { c: 100000, d: { e: 5 } } } { a: 500, b: { c: 100000, d: { e: 5 } } }
/* 
👉 1. '===' strict equals, even two object share the same reference,
they are still distinct object, return false
👉 2. Only Top Level Property (第一層no matter value or object)都是pass by value
only nested object inside pass by reference - ex. obj.a obj.b pass by value, obj.b.c - pass by reference
*/
// console.log("* ------------- Deep Copy ------------- *");
// function deepCopyFactory(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }
// const deepcopy_obj = deepCopyFactory(original_obj);
// original_obj.a = 1000;
// deepcopy_obj.a = 50000;
// console.log(original_obj.a, deepcopy_obj.a); // 1000, 50000 => different reference
// console.log("* ------------------------------------- *");
/* 3. 🔥 Implement Promise.all 🔥 */
/* 🟢 Basic using Promise.all - iterable - * need array of promise 
      promise -> resolve or reject -- use try/catch or .then().catch() to get the promise state
*/
console.log("* ---- Implement Promise.all() with build-in function -----");
const promise1 = Promise.resolve("1");
const promise2 = new Promise((res, rej) => res("2"));
const promise3 = new Promise((resolve, rej) => {
  setTimeout(() => {
    resolve("3");
  }, 2000);
});
const promise4 = new Promise((res, rej) =>
  rej("Error, once there is a reject, promise.all would fail")
);
const promises = [promise1, promise2, promise3];

const basicResult = Promise.all(promises);
basicResult
  .then((res) => console.log(res, "Promise.all()"))
  .catch((err) => console.log(err));

console.log("* -- Implement promise.all from scratch -- *");
const promiseAll = function (promises_array) {
  // edge case
  if (!Array.isArray(promises_array)) return new Error("args must be iterable");
  if (promises_array.length === 0) return Promise.resolve([]);

  const results = [];
  let resCounter = 0;

  // ⭐️我沒想到的部分⭐️
  return new Promise((resolve, reject) => {
    promises_array.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = value; // or push value to results
          resCounter += 1;
          if (resCounter === promises_array.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(new Error("Something went wrong!", err)));
      // 不可以直接catch(reject)
    });
  });
};

const result = promiseAll([...promises]);
result.then((res) => console.log(res)).catch((err) => console.log(err));
const result2 = promiseAll([...promises, promise4]);
result2.then((res) => console.log(res)).catch((err) => console.log(err));
const result3 = promiseAll([promise2, promise3]);
result3.then((res) => console.log(res)).catch((err) => console.log(err));

const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

const sleepPromises = [sleep(1000), sleep(2000), sleep(3000)];
const results = promiseAll(sleepPromises);
results.then((values) => console.log(values)).catch((err) => console.log(err));

/* 4. 🔥 Flatten Array using Reduce | Recursive 🔥 */
console.log("* ------------------------------------- *");
const arr = [1, 2, [3, 4, [5, 6]], [7], 8, 9];

// build-in function flat()
const res = arr.flat(Infinity);
console.log(res);

// ✅ use reduce(set init as []), and concat all item(check whether is array) or element
const flattenArray = (arr) => {
  return arr.reduce((result, curItem) => {
    return result.concat(
      Array.isArray(curItem) ? flattenArray(curItem) : curItem
    );
  }, []);
};

const flatArray3 = (arr) => {
  return arr.reduce((result, item) => {
    return Array.isArray(item)
      ? [...result, ...flatArray3(item)]
      : [...result, item];
  }, []);
};

console.log(flattenArray(arr));

// ✅ use normal function w/o using build-in array function
const flattenArray2 = (arr) => {
  const res = [];

  const helper = (arr) => {
    for (const key in arr) {
      if (Array.isArray(arr[key])) helper(arr[key]);
      else res.push(arr[key]);
    }
  };

  helper(arr);
  return res;
};

console.log(flattenArray2(arr));
console.log("* ------------------------------------- *");
/* TODO learn flatten object https://blog.theashishmaurya.me/flatting-an-object-and-array-using-recursion-and-other-methods*/

/* 5. 🔥 Sleep function 🔥 */
// const sleep2 = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(time);
//     }, time);
//   });
// };
// async function greeting() {
//   console.log("Hello");
//   await sleep2(5000);
//   console.log("bye");
// }
// greeting();

/* 6. 🔥 call() apply() bind() + This 🔥 
⭐️ Assign object to "this" keyword
*/

// Base Case
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(" --- Base Case ---");
console.log(person.fullName()); // John Doe

const people = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
/* -------------- call(obj, arg1, arg2, ...) -------------- */
/* -------------- apply(obj, [arg1,arg2,...]) -------------- */
/* 🔥 assign object to 'this' whose function invoke it */
const people1 = {
  lastName: "Timmmy",
  firstName: "Hank",
};

const people2 = {
  lastName: "Tommy",
  firstName: "Shellby",
};

// ⭐️ call(object) / apply(obj) to refer 'this' keyword to the function who invoked
console.log(people.fullName.call(people1)); // Hank Timmy
console.log(people.fullName.call(people2)); // Shellby Tommy
console.log(people.fullName.apply(people2)); // Shellby Tommy
// // 👉 it can takes other arguments .call(obj, arg1, arg2) for assign to function
const obj = { name: "Johnny" };
const obj2 = { name: "Tommy" };
const greeting = function (a, b) {
  return `${a} ${this.name}. ${b}`;
};
console.log(greeting.call(obj, "Hello", "How are you doing today?"));
// Hello Johnny. How are you doing today?
// ⭐️ apply(obj, [arg1, arg2]) - almost same as call() but accept array of args
console.log(greeting.apply(obj2, ["Hello", "How are you doing today?"]));
// Hello Tommy. How are you doing today?

console.log(Math.max([1, 2, 100])); //NaN - js can not find the max in array
// but we can use apply to sign it to an array, with obj null, arg = numbers[]
const numbers = [1, 2, 3, 4, 1000];
console.log(Math.max.apply(null, numbers)); // 1000
console.log("* ----------- call() apply() bind() ----------- ");

// ⭐️ bind() method create a new function which wrap the original object
const bindGreet = greeting.bind(obj);
const bindGreet2 = greeting.bind(obj2);
console.log(bindGreet("Bind() Hello", "How is your day?"));
// Bind() Hello Johnny. How is your day?
console.log(bindGreet2("Bind() Hello", "How is your day?"));
// Bind() Hello Tommy. How is your day?
/* Sumup
🟢 The call, bind, and apply methods can be used to 
set the 'this' keyword independent of how a function is called.

- function.bind(thisArg, optionalArguments)
- function.apply(thisArg, [argumentsArr])
- function.call(thisArg, argu1, argu2, ...)
*/

const sleepy = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("wake up after " + time + " ms");
    }, time);
  });
};

const result5 = sleepy(5000);
// ⭐️⭐️ 每次跟promise有關的function都忘記他是回傳一個promise, 需要用.then() or try catch 去接他
// 🔥 .then()
result5.then((val) => console.log(val));

// 🔥async await try catch
async function wakeUp(time) {
  try {
    const message = await sleepy(time);
    console.log(message);
  } catch (error) {
    throw error;
  }
}
wakeUp(3000);

/* 7. 🔥 Flatten Object(Json) */
const sample = {
  isbn: "123-456-222",
  author: {
    lastname: "Doe",
    firstname: "Jane",
    address: {
      street: "3856 Pooz Street",
      city: "South River",
      state: "New Jersey",
      counrty: "United State",
    },
  },
  title: "The Ultimate Database Study Guide",
  category: ["Non-Fiction", "Technology"],
};

/*
⭐️Algorithms

1. use a variable res to wrap the result as the return
2. recursive function
  -- get key via for(key in obj)
  -- check value(obj[key]) typeof === 'object' and not array
  if yes(obj) - do recusive for the obj[key] = value
  🟢🟢🟢注意 [key]: obj[key] 是dynamic nature of props in js
  - 如果用key: obj[key], 那object會變成{'key': value..}
  - object 跟 map的差別就是
  -- object的key會自動轉成字串 no matter what you put as key
  -- 會造成conflict like Number(123) and '123' 會被當成同樣的key
  -- map不會 just like HashMap in Java
  if no(not obj) - directly push it into res by ...spread operator
*/

const flatten_object = (object) => {
  let res = {};
  const dfs = (obj) => {
    for (const key in obj) {
      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        dfs(obj[key]);
      } else {
        res = { ...res, [key]: obj[key] };
      }
    }
    return res;
  };

  dfs(object);
  return res;
};

// console.log(flatten_object(sample));

let testObj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
    Backend: {
      framework: ["nodejs", "express", "django"],
      RDBMS: "MongoDB",
    },
  },
};

function flat_object2(obj) {
  const res = {};

  for (const parentKey in obj) {
    // check whether it is a object and not array
    if (typeof obj[parentKey] === "object" && !Array.isArray(obj[parentKey])) {
      const subObject = flat_object2(obj[parentKey]);
      for (const subKey in subObject) {
        res[parentKey + "." + subKey] = subObject[subKey];
      }
    } else res[parentKey] = obj[parentKey];
  }
  return res;
}

console.log(flat_object2(sample));
console.log(flat_object2(testObj));
