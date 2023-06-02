import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "../style/Moviedetails.css"

export default function MovieDetails({movie}) {
  const navigate =useNavigate()


// console.log(array)

const array =movie.show.genres
console.log(array)


  return (
    <div><div className="moviecard">
    <div className="movie-poster ">
        <img className='img-post' src ={movie.show.image.original}/>
    </div>
    <div id="movie-content">
      <div className="movie-ratings"><span className="star">★</span><span className="score">{movie.show.rating.average || <span className='imdb-none'>Not Mentioned</span>}</span><span className="score-out-of">/ 10 (IMDB)</span></div>
      <div className="movie-title"><a href="http://www.imdb.com/title/tt3397884" target="_blank">{movie.show.name}</a><span className="movie-language">{movie.show.language}</span></div>
      <div className="movie-details"><span className="movie-rating">Release on {movie.show.schedule.days[0] || "not mention"} at {movie.show.schedule.time || "not mention"}</span><span className="movie-duration">{movie.show.runtime || "not mention"} min</span> 
      {array.map((data)=>(
      <span className="movie-genre">{data}</span>
      ))}
      </div>
      <div className="movie-detail"><span className="title">Status</span><span className="name">{movie.show.status}</span></div>
      <div className="movie-detail"><span className="title">Type</span><span className="name">{movie.show.type}</span></div>
      <div className="movie-detail"><span className="title">premiered</span><span className="name"> {movie.show.premiered}</span></div>
      <div className='movie-synopsis' dangerouslySetInnerHTML={{ __html: movie.show.summary} } />
      <button className="movie-back-btn " type="button" onClick={(() => navigate(-1))}>Back</button>
    </div>
  </div>
  </div>
  )
}
