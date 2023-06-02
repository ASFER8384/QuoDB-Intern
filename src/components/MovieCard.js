import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from './Navbar';
import "../style/Moviecard.css"

// Component for the first screen to display data and an image
const MovieCard = ({ setMovie }) => {
    const navigate = useNavigate()
    // Make API call to retrieve movie details
    const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => setMovieData(data))
            .catch(error => console.error('Error:', error));
    }, [])


    return (
        <>
        <Navbar/>
        <div className='wrapper'>
            {movieData.map((data) => (
                <div key={data.show.id} className='movie-card' >
                    <img  className='img'  src={data.show.image.medium} alt="Movie Poster" />
                    <h3 className='title'>{data.show.name}</h3>
                    <Link to="/movie">
                    <button  onClick={(() => setMovie(data))} className='book'>Show More</button>
                    </Link>
                </div>
            ))}
        </div>
        </>
    );
};

export default MovieCard;