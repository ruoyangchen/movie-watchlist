challenges and solution log
***INITIAL***

1/ how to get the right information to display.
*research the API and figure out what the request needs to be.
multiple console.log to see what returns from each response.
solution: use the first response: movie ID to search for detailed movie info.

2/error: Response: "False", Error: "No API key provided."
*needs to get an API key from the website and ininclude it in my request.

3/how to get multiple results from the api?
*needs to make sure it is "search" in the request

4/add another js file? or add another css file?


5/one sided border-radius

6/display: inline-flex; 
*makes the <a> tag a flex container, allowing its children to be displayed inline and aligned vertically.

7/find out which movie is added to watchlist when the icon is clicked
*data-movie-id

8/set up local storage

9/render out movies in my watchlist 
*both functions need to be async functions.e. The getMyMovieArray() function is asynchronous, so it doesn't wait for the data to be fetched before moving to the next line of code. As a result, when you try to log myMovieArray, it might not contain the fetched data yet.

To fix this, you should wait for getMyMovieArray() to complete before logging or using myMovieArray. You can do this by awaiting the function call within an async function.

10/movielist gets refreshed everytime i go back to index.html
*Initialize myList array from local storage, or an empty array if no data is stored
let myList = JSON.parse(localStorage.getItem("myList")) || [];

11/remove button

12/read more button

13/display :flex is overriding display: none
*added another div

***update 240329
fix bug: every new search is being appended to the previous search
*newMovieArray and HTML has to be cleared.

fix bug: no data-state doesn't work


***TO DO***
-responsive design update
-read more button
-code review from someone
-enter key down(maybe)
-show counts in mylist
