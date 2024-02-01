/* 1. Mock fetching data using promise */
const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    if (url === "47chen.com") {
      setTimeout(() => {
        resolve("Successfully fetch the data!");
      }, 2000);
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

/* ------------------------------------- */
