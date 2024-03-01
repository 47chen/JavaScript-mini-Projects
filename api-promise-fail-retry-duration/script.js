const fetchDataWithRetry = async (url, maxRetries, delayDuration) => {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = response.json();
      return data;
    } catch (error) {
      console.error(`Attemp ${retries + 1} failed: ${error.message}`);

      retries++;
      if (retries < maxRetries) {
        console.log(`Retrying in ${delayDuration} milliseconds...`);
        await new Promise((resolve) => setTimeout(resolve, delayDuration)); // setTimeout for delayDuration, whenever it's resolved, it will continue to next line
      }
    }
  }
};

// 示例用法
const apiUrl = "https://example.com/api/data";
const maxRetries = 3;
const delayDuration = 1000; // 1秒

(async () => {
  try {
    const result = await fetchDataWithRetry(apiUrl, maxRetries, delayDuration);
    console.log("Data:", result);
  } catch (error) {
    console.error("Failed to fetch data:", error.message);
  }
})();
