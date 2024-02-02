const url = "https://moviesverse1.p.rapidapi.com/movies/year/2023/1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a6340b1f96mshacaecc2abfb183fp1cc0e2jsnc0028fad5fa7",
    "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
  },
};

const fetchData = async () => {
  try {
    const response = await fetch(url, options);
    const movies = await response.json();
    console.log(movies);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
