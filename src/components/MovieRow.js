import React from 'react';
import './MovieRow.scss';

const MovieRow = ({title, items}) => {
    return (

        <div>
           <h2>{title}</h2>
           <div className="movieRow-listArea">
            {items.results.length > 0 && items.results.map((item, key) => (
                <img src={`https://image.tmdb.orgt/t/p/w300${item.poster_path}`} alt={item.original_name}/>
            ))}
           </div>
        </div>
    )
}
export default MovieRow;