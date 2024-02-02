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
      // ✅ JS single thread, you should addMovies here, if you
      //   addMovies outside of here, you will instantly envoke with
      //   or create another async function 看下面
      /* addMovies(movieList); */
    } else {
      console.log("No such property");
    }

    return data.movies;
  } catch (error) {
    console.error("Error fetching movies", error);
  }
};

/* 
TODO:
1. get DOM by reference
2. movieList - appendChild to movies-wrapper
3. assign api value to innerHTML | textContent
*/

const wrapper = document.getElementById("movies-wrapper");
const addMovies = async (movies) => {
  movies.forEach((movie) => {
    // let id = movie.id;
    // let link = movie.link;
    // let text = movie.text;
    // let imgUrl = movie.img;
    // ✅ optimization 1. - destruct the movie
    const { id, link, text, img } = movie;

    let div = document.createElement("div");
    let movieImg = document.createElement("img");
    let movieId = document.createElement("h3");
    let movieLink = document.createElement("p");
    let movieText = document.createElement("p");

    div.classList.add("movie-card");
    movieImg.classList.add("movie-img");
    movieId.classList.add("movie-id");
    movieText.classList.add("movie-text");
    movieLink.classList.add("movie-link");

    // ⭐️ assign value to innerHTML | textContent | innerText
    // ✅ optimization 2. - textContent more performant than innerText
    movieId.textContent = `id: ${id}`;
    movieLink.innerHTML = `<strong>Link</strong>: ${link}`;
    movieText.textContent = `Text: ${text}`;

    movieImg.src = img;
    movieImg.alt = img;

    div.appendChild(movieImg);
    div.appendChild(movieId);
    div.appendChild(movieLink);
    div.appendChild(movieText);

    wrapper.appendChild(div);
  });
};

const display = async () => {
  let moviess = await fetchMovies();
  addMovies(moviess);
};

display();

// ⭐️⭐️⭐️
// acutally we can add eventListener to each div in the addMovies functino

// but using currentTarget Event Delegation can improve more efficiency
wrapper.addEventListener("click", (e) => {
  e.preventDefault();
  const clickElement = e.target.closest(".movie-card");
  console.log(clickElement);
  if (clickElement) {
    const movieId = clickElement.querySelector(".movie-id");
    const text = movieId.innerText;
    console.log(text);
    const real_id = text.trim().split("id: ")[1];
    console.log(real_id);
    console.log(movieId);
    // console.log(real_id);
    alert(`Click on ${real_id}`);
  }
});
