import React from 'react';
import './MovieRow.scss';

const MovieRow = ({title, items}) => {
    return (

        <div className="movieRow">
           <h2>{title}</h2>
           <div className="movieRow-listArea">
                <div className="movieRow-list">
                {items.results?.length > 0 && items.results.map((item, key) => (
                    <div key={key} className="movieRow-item">
                         <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name} />
                    </div>
            ))}
                </div>
           </div>
        </div>
    )
}
export default MovieRow;