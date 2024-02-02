const url = "https://moviesverse1.p.rapidapi.com/movies/1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a6340b1f96mshacaecc2abfb183fp1cc0e2jsnc0028fad5fa7",
    "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
  },
};

// TODO: Fetch data - hasOwnProperty |
// map through each data.movies and add one new field via spread {...obj}
// filter specific items
let movieList = [];

const fetchMovies = async () => {
  try {
    const resp = await fetch(url, options);
    const data = await resp.json();

    // ⭐️ check props exist
    if (data.hasOwnProperty("movies")) {
      movieList = data.movies;
      console.log("Successfully fetch movies", movieList);
    } else throw new Error("No such property");

    // ⭐️add new field - map through movie and add field by {...movie, newField: 'value}
    const movieWithOwner = movieList.map((movie) => {
      return { ...movie, owner: "47chen" };
    });
    console.log(movieWithOwner);
    // ⭐️filter specific items
    const filterList = movieWithOwner.filter(
      (movie) => movie.id !== "the-beekeeper-dual-audio-hindi"
    );
    console.log(filterList);
  } catch (error) {
    console.log(error);
  }
};

fetchMovies();
