let myList = JSON.parse( localStorage.getItem("myList") ) || []
const myListHtml = []
const listStateDiv = document.getElementById("list-state")
const emptyListDiv = document.getElementById("list-empty-state")
console.log(emptyListDiv.classList)

async function getMyMovieArray(){
    const myMovieArray = []
        for(let id of myList){
        const response = await fetch(`https://www.omdbapi.com/?apikey=e699b1ed&i=${id}`)
        const data = await response.json()
        myMovieArray.push(data)
    }
return myMovieArray
}

renderMyMovies()

async function renderMyMovies(){ 
    const myMovieArray = await getMyMovieArray()
    console.log(myMovieArray.length)
    if (myMovieArray.length > 0){
            listStateDiv.innerHTML = "" //clear existing html
            for(let movie of myMovieArray){
            myListHtml.push(
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
                                    <div class="remove-container">
                                        <i class="fa-solid fa-circle-minus" 
                                        data-movie-id=${movie.imdbID}></i>
                                        <p>Remove</p>
                                    </div>
                        </div>
                        <p class="plot">${movie.Plot}</p>
                    </div>
                </div>`
                )
             }
             listStateDiv.innerHTML = myListHtml.join("")
             emptyListDiv.classList.add("hidden") 
             }else { 
                 hideListState()
                 showEmptyListMsg()
             }
            
}

function showEmptyListMsg(){
    emptyListDiv.classList.remove("hidden")
}


function hideListState(){
    listStateDiv.classList.add("hidden")
}

document.addEventListener("click", function(e){
    if(e.target.dataset.movieId){
        const movieId = e.target.dataset.movieId
       console.log(myList)
       myList = myList.filter(id => id !== movieId)
       localStorage.setItem("myList", JSON.stringify(myList))
       myListHtml.length = 0
       renderMyMovies()
    }
})