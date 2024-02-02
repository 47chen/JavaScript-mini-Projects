const url = "https://moviesverse1.p.rapidapi.com/movies/1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a6340b1f96mshacaecc2abfb183fp1cc0e2jsnc0028fad5fa7",
    "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
  },
};

// TODO: Fetch data - hasOwnProperty | assign to variable

let movieList = [];

const fetchMovies = async () => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();

    // check whether has props | can also put console.log to check
    if (data.hasOwnProperty("movies")) {
      movieList = data.movies;
      console.log("Successfully fetch movie data", movieList);
    } else {
      console.log("No such property");
    }
  } catch (error) {
    console.error("Error fetching movies", error);
  }
};

fetchMovies();
