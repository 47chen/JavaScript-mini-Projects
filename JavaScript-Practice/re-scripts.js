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
const sleep2 = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};
async function greeting() {
  console.log("Hello");
  await sleep2(5000);
  console.log("bye");
}
greeting();
