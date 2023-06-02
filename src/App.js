
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movie,setMovie]=useState()


  return (
   <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MovieCard setMovie={setMovie}/>}/>
    <Route path="/movie" element={<MovieDetails movie={movie}/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
