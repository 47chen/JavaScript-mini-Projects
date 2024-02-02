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

const fetchMovies = async () => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    // ❌ this will only add new field on top level props
    // addNewField(data, {tag: "movieFromRapidAPI"})

    // ✅ map through each movie and add new field in it
    let newData = data.movies.map((movie) => {
      return { ...movie, tags: "moviesFromRapidAPI" };
    });

    // ✅ filter sepcific obj - such as person.age < 18, movie.name !== ...
    let filterList = newData.filter((movie) => {
      return movie.id === "the-underdoggs-dual-audio-hindi-esubs-webrip";
    });

    console.log(filterList);
    console.log(data);
    console.log(newData);
  } catch (error) {
    console.error("Error fetching movies", error);
  }
};

fetchMovies();

// ❌ want to add a new field for each items in the obj
// const addNewField = (obj, newField) => {
//   return { ...obj, newField };
// };

/* Advanced - ✅ filter property  */
const movies = [
  { id: "movie1", img: "url1", link: "link1" },
  { id: "movie2", img: "url2", link: "link2" },
  { id: "movie3", img: "url3", link: "link3" },
  { id: "movie4", img: "url4", link: "link5" },
];

const filterMoviesByProperty = (movies, prop, value) => {
  //   return movies.filter((movie) => movie[prop] === value);
  return movies.filter((movie) => movie[prop] !== value);
};

const filterMovie2 = filterMoviesByProperty(movies, "id", "movie2");

console.log(filterMovie2);
