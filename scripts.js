const apiKey = 'REPLACE_WITH_YOUR_KEY';
const baseAPIUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

$(function () {
  // After the DOM has loaded, call afterGoClicked after any time the button is clicked

})

function afterGoClicked() {
  // Read the selected genre id from the select boxes and save it to a variable
  // Hint: use the JQuery .val() function on the element
  // Documentation: http://api.jquery.com/val/

  // Read the entered year from the text box and save it to a variable

  // Call buildQueryString to handle building a completeUrl

  // Load the JSON from the API with completeUrl, and then call the afterDataLoaded function

}

/* Combine the baseUrl, genre, and year together to create a complete url with the
  right query parameters. Then return the url.

  Check out examples query params at https://www.themoviedb.org/documentation/api/discover
*/
function buildQueryString(baseUrl, genre, year){
  return '';
}

// Call this function with the data object that comes back from getJSON
function afterDataLoaded(dataObject){
  // All images have this base URL
  var posterBaseUrl = "https://image.tmdb.org/t/p/w500"

  /* Loop over the results in the dataObject. 
    HINT: use your debugger to find the name
    of the property that includes the array of results. 
  */

  /* For each result:
    - Look up a corresponding img element (in order)
    - Set the img element's src tag to posterBaseUrl + the poster_path from the result movie
   */
}