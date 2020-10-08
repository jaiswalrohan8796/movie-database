$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {
    axios.get(`http://www.omdbapi.com/?s=${searchText}&apikey=d0dac2b2`).then((response) => {
        console.log(response.data);
        let searchedMovie = response.data;
        let outputMovie = `<div><img src="${searchedMovie.Poster}><h2>${searchedMovie.Title}</h2><p>${searchedMovie.Rated}</p></div>`;
        $('#movies').html(outputMovie);
}).catch((err) => {
    console.log(err);
});
        
        
    
}