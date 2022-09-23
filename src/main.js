async function getTrendingMoviesPreview ( ) {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key='+ API_KEY);
    const data = await res.json();

    const movies = data.results;
    console.log({data, movies}); 

    movies.array.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt', movie.title);
        movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + poster_path,); 
    });
}

getTrendingMoviesPreview ();