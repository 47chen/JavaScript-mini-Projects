// 示例用法
// const url = "https://moviesverse1.p.rapidapi.com/movies/1";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "a6340b1f96mshacaecc2abfb183fp1cc0e2jsnc0028fad5fa7",
//     "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
//   },
// };

/* 
- API 會fail, and we need to retry it at "maxRetries" times with "delayDuration" in between
create a function with 3 parameters, url(fetch API), maxRetries, delayDuration
TODO1: use while loop and a variable "retry" to check whether < maxRetries
TODO2: use try-catch to fetch the data, if it's not ok, throw an error
TODO3: if there's an error, console.log the error messange and make retry count += 1


*/

// const fetchDataWithRetry = async (url, maxRetries, delayDuration) => {
//   let retryCount = 0;
//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }

//     const data = response.json();
//     return data;
//   } catch (error) {
//     // console.log(`Attemp ${retryCount + 1} failed due to ${error.message}`);
//     console.error(`Attemp ${retryCount + 1} failed: ${error.message}`);

//     if (retryCount < maxRetries) {
//       retryCount++;
//       console.log(`Retrying in ${delayDuration} mill seconds`);
//       await new Promise((resolve, reject) =>
//         setTimeout(resolve, delayDuration)
//       );
//     }
//   }
// };

// const url = "https://example.com/api/data";
// const maxRetries = 3;
// const delayDuration = 2000; // 2000ms

// const fetchAPI = async (url, maxRetries, delayDuration) => {
//   try {
//     const result = await fetchDataWithRetry(url, maxRetries, delayDuration);
//     console.log("Successfully fetch the data with ", result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchAPI(url, maxRetries, delayDuration);

// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("12345");
//   }, delayDuration + 5000);
// });

// (async () => {
//   try {
//     const result = await promise1;
//     console.log(result, "successfully fetch data");
//   } catch (error) {
//     console.log(error);
//   }
// })();

// 定義 API URL
const API_URL = "https://api.example.com/";

// 定義重試次數和延遲時間
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 毫秒

const callAPI = async (endpoint) => {
  const url = `{API_URL}${endpoint}`;
  const response = await fetch(url);

  if (response.ok) return await response.json();
  else throw new Error(`API call failed due to ${response.status}`);
};

const wait = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};

const makeRequest = async (endpoint) => {
  let retries = 0;
  while (retries < MAX_RETRIES) {
    try {
      const data = await callAPI(endpoint);
      return data;
    } catch (error) {
      console.log(`Request ${retries + 1} failed`);
      retries += 1;
      console.log(`Try fetch again within ${RETRY_DELAY} milsecond`);
      console.log(`${retries}th try and run this line`);
      // await new Promise((resolve) => setTimeout(() => resolve(), RETRY_DELAY));
      await wait(RETRY_DELAY);
      console.log("run this line2");
      if (retries === MAX_RETRIES)
        throw new Error(`Already try ${retries} and still failed`);
    }
  }
};

async function main() {
  try {
    const data = await makeRequest("user");
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

main();

// 使用 async/await 呼叫 API
// async function callAPI(endpoint) {
//   const url = `${API_URL}${endpoint}`;
//   const response = await fetch(url);

//   if (response.ok) {
//     return await response.json();
//   } else {
//     throw new Error(`API call failed: ${response.statusText}`);
//   }
// }

// 使用 try-catch 處理 API 失敗
// async function makeRequest(endpoint) {
//   let retries = 0;
//   let lastError;

//   while (retries < MAX_RETRIES) {
//     try {
//       return await callAPI(endpoint);
//     } catch (error) {
//       lastError = error;
//       console.error(`API call failed: ${error.message}`);

//       // 等待延遲時間後再重試
//       await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
//       retries++;
//     }
//   }

//   throw new Error(
//     `API call failed after ${MAX_RETRIES} retries: ${lastError.message}`
//   );
// }

// async function makeRequest(endpoint) {
//   let retries = 0;
//   let lastError;
//   while (retries < MAX_RETRIES) {
//     try {
//       const data = await callAPI(endpoint);
//       return data;
//     } catch (error) {
//       lastError = error;
//       console.error(`API call failed: ${error.message}`);

//       // 等待延遲時間後再重試
//       retries++;
//       await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));

//       if (retries < MAX_RETRIES) {
//         return await makeRequest(endpoint);
//       } else {
//         throw new Error(
//           `API call failed after ${MAX_RETRIES} retries: ${lastError.message}`
//         );
//       }
//     }
//   }
// }

// 使用範例
// async function main() {
//   try {
//     const data = await makeRequest("users");
//     console.log(data);
//   } catch (error) {
//     console.error(`API call failed: ${error.message}`);
//   }
// }

// main();
