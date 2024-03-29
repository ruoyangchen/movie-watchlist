const inputEl = document.getElementById("input")
const searchBtn = document.getElementById("search-btn")
const newMovieArray = []
const movieListHtml = []
const initialStateDiv = document.getElementById("initial-state")
const noDataStateDiv = document.getElementById("no-data-state")
let myList = JSON.parse(localStorage.getItem("myList")) || []
// Initialize myList array from local storage, or an empty array if no data is stored


document.addEventListener("click", function(e){
    if(e.target.id === "search-btn"){
        handleClick()
    }else if(e.target.dataset.movieId){
        const movieId = e.target.dataset.movieId
        if(!myList.includes(movieId)){
            myList.push(e.target.dataset.movieId)
            localStorage.setItem("myList", JSON.stringify(myList))
        }
       
        // console.log(myList)
    }
})


async function handleClick(){
    const inputValue = inputEl.value
  
    const response = await fetch(`https://www.omdbapi.com/?apikey=e699b1ed&s=${inputValue}`)
    const data = await response.json() 
    const movieArray = data.Search
    newMovieArray.length = 0

    if(data.Response ==="True"){
        for(let movie of movieArray){
        const response = await fetch(`https://www.omdbapi.com/?apikey=e699b1ed&i=${movie.imdbID}`)
        const data = await response.json()
        newMovieArray.push(data)
    }
        hideInitialState()
        renderMovies()
    }else{
        hideInitialState()
        showNoDataMsg()
    }
    
}

function showNoDataMsg(){
    noDataStateDiv.classList.remove("hidden")
}
function hideInitialState(){
    initialStateDiv.classList.add("hidden")
}

function renderMovies(){ 
    movieListHtml.length = 0
    for(let movie of newMovieArray){
        movieListHtml.push(
         `   <div class="movie-card">
                    <img src="${movie.Poster}")>
                    <div>
                        <div class="title-container">
                            <h3 class="movie-title">${movie.Title}</h3>
                            <i class="fa-solid fa-star"></i>
                            <p>${movie.imdbRating}</p>
                        </div>
                        <div class="info-container">
                                    <p>${movie.Year}</p>
                                    <p>${movie.Genre}</p>
                                    <div class="add-container">
                                        <i class="fa-solid fa-circle-plus" 
                                        data-movie-id=${movie.imdbID}></i>
                                        <p>Watchlist</p>
                                    </div>
                        </div>
                        <p class="plot">${movie.Plot}</p>
                    </div>
                </div>`
        )
    }
    
    document.getElementById("movie-container").innerHTML = movieListHtml.join("")
    
}
