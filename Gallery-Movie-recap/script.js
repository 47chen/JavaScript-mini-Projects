const url = "https://moviesverse1.p.rapidapi.com/movies/1";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a6340b1f96mshacaecc2abfb183fp1cc0e2jsnc0028fad5fa7",
    "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
  },
};

let movieList = [];

function setMovie(fetchData) {
  movieList = fetchData;
}

// ✅ fetch 3rd API and set the data to movieList
const fetchMovies = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    setMovie(data.movies);
    const addTextMovies = movieList.map((movie) => {
      return { ...movie, text: "This movie is good" };
    });

    return addTextMovies;
  } catch (error) {
    console.log(error);
  }
};

/* 
TODO
1. refer all DOM element
2. displayMovies takes fetch movie data as args

3. for each movie we have to
create new element img
create new element ul
create new element li 
assign movie data to these dom innerText
add classList to each field - img li 

4. if click the card need to alert its movie id
*/

const $container = document.getElementById("grid-container");
console.log($container);
const displayMovies = async () => {
  const movies = await fetchMovies();
  console.log(movies);
  movies.forEach((movie) => {
    // destruct movie object
    const { id, img: img_src, link, text } = movie;

    // create dom element
    const div = document.createElement("div");
    const image = document.createElement("img");
    const movie_id = document.createElement("p");
    const li_link = document.createElement("li");
    const li_text = document.createElement("li");

    // assign movie field to dom element
    image.src = img_src;
    movie_id.innerHTML = `<strong>MovieId</strong>: ${id}`;
    li_link.innerText = link;
    li_text.innerText = text;

    // add class to each element
    div.classList.add("grid-item");
    movie_id.classList.add("movie-id");
    li_link.classList.add("movie-link");
    li_text.classList.add("movie-text");

    div.appendChild(image);
    div.appendChild(movie_id);
    div.appendChild(li_link);
    div.appendChild(li_text);

    $container.appendChild(div);
    console.log("run displayMovies");
  });
};

$container.addEventListener("click", (e) => {
  const clickElement = e.target.closest(".grid-item");
  const showTextElement = clickElement.querySelector(".movie-id");
  const showText = showTextElement.innerText;
  alert(showText);
});

displayMovies();
/* ---------------------------------------------------------------- */
// 🔥 Fetch 3rd party API => Add new field on the response [object] => Filter specific content
// const fetchMoviesWithJsonOperation = async () => {
//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();

//     setMovie(data.movies);
//     // ✅ add a new field for the moiveList
//     const newMovieList = movieList.map((movie) => {
//       return { ...movie, owner: "47chen", movieName: "Avatar2" };
//     });
//     console.log(newMovieList);

//     // ✅ filter the json with specfic content
//     // id = 'argylle-dual-hindi-hdts-moviesverse-li' and img = 'https://moviesverse.li/wp-content/uploads/2024/01/The-Beekeeper-2024.jpg'
//     const filterMovieList = newMovieList.filter((movie) => {
//       const { id, img } = movie;
//       if (
//         id === "argylle-dual-hindi-hdts-moviesverse-li" ||
//         img ===
//           "https://moviesverse.li/wp-content/uploads/2024/01/The-Beekeeper-2024.jpg"
//       ) {
//         return true;
//       }
//     });

//     console.log(filterMovieList);
//   } catch (error) {
//     console.log(error);
//   }
// };
