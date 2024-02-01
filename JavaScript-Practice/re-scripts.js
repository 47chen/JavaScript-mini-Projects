/* 1. 🔥 Mock fetching data using promise - .then().catch() | async await try catch 🔥 */
const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    if (url === "47chen.com") {
      setTimeout(() => {
        resolve("Successfully fetch the data!");
      }, 1000);
    } else reject("Something went wrong");
  });
};
const url1 = "47chen.com";
const url2 = "48chen.com";
// .then .catch
fetchData(url1)
  .then((message) => console.log(message))
  .catch((err) => console.log(err));

fetchData(url2)
  .then((message) => console.log(message))
  .catch((err) => console.log(err));

// async await try catch
const getRequest = async (url) => {
  try {
    const message = await fetchData(url);
    console.log(message);
  } catch (err) {
    console.log(err);
  }
};

getRequest(url1);
getRequest(url2);

// Implement a new promise
const myPromise = new Promise((resolve, reject) => {
  const someCondition = true;
  if (someCondition) {
    setTimeout(() => {
      resolve("resolve my promise");
    }, 1000);
  } else reject("Error fetching data");
});

async function resolveMyPromise() {
  try {
    const data = await myPromise;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
resolveMyPromise();
setTimeout(
  () => console.log("* ------------------------------------- *"),
  2000
);
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
function shallowCopy(originObj) {
  return Object.assign({}, originObj);
}
const original_obj = { a: 1, b: { c: 2, d: { e: 5 } } };
const shallow_copy = shallowCopy(original_obj);

const unknownCopy = { ...shallow_copy };
console.log("* ------------------------------------- *");
console.log(shallow_copy === original_obj); // false
console.log(shallow_copy == original_obj); // false
console.log("* Compare top level props | nested obj in object | deep value *");
console.log(shallow_copy.a === original_obj.a); // true
console.log(shallow_copy.b === original_obj.b); // false ❌ // TRUE ✅
console.log(shallow_copy.b.d.e === original_obj.b.d.e); // false❌ // TRUE ✅
console.log("* ------Reference changed check ------ *");
shallow_copy.a = 100;
original_obj.a = 500;
console.log(shallow_copy.a, original_obj.a); // 100, 500 since Top Level Props pass by value
shallow_copy.b.c = 100000;
console.log(shallow_copy, original_obj);
// { a: 100, b: { c: 100000, d: { e: 5 } } } { a: 500, b: { c: 100000, d: { e: 5 } } }
/* 
👉 1. '===' strict equals, even two object share the same reference,
they are still distinct object, return false
👉 2. Only Top Level Property (第一層no matter value or object)都是pass by value
only nested object inside pass by reference - ex. obj.a obj.b pass by value, obj.b.c - pass by reference
*/
console.log("* ------------- Deep Copy ------------- *");
function deepCopyFactory(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const deepcopy_obj = deepCopyFactory(original_obj);
original_obj.a = 1000;
deepcopy_obj.a = 50000;
console.log(original_obj.a, deepcopy_obj.a); // 1000, 50000 => different reference
console.log("* ------------------------------------- *");
