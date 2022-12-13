import React  from 'react'

import { useParams } from 'react-router-dom'

const Description = ({movies}) => {
const {id} = useParams();
  
  return (
    <div>
      {movies.filter (movie => movie.id === id).map ((movie, index) => (
        <div key = {index}>
        <img src= {movie.posterUrl} alt= 'Poster'/>
        <h1>{movie.title}</h1>
         <p> {movie.rate}</p>
        <p>{movie.description}</p>
        <video src = {movie.trailer} />  
        </div>
      ))}
    </div>
  )
}

export default Description