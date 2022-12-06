import React from 'react'
import Moviescard from './Moviescard'
import'../Components/movielist.css'
const Movielist = ({movies, inputSearch, inputRate}) => {
  return (
    <div className='movie'>
        {(inputRate>0) ? movies.filter(movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim()) && movie.rate == (inputRate))
        .map(movie => <Moviescard movie = {movie} key = {movie.id}/>) 
        : movies.filter(movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim())).map(movie => <Moviescard movie = {movie} key = {movie.id}/>)}
    </div>
  )
}

export default Movielist