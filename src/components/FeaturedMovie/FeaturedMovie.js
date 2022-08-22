import'./FeaturedMovie.scss';

const FeaturedMovie = ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }
    console.log(item)
    return (
            <section className="featured" style={{
                 backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
                 }}>
                <div className="featured-gradient-vertical">
                    <div className="featured-gradient-horizontal">
                        <div className="featured-name">{item.original_name}</div>
                        <div className="featured-info"></div>
                        <div className="featured-points">{item.vote_average} <span>pontos</span></div>
                        <div className="featured-year">{firstDate.getFullYear()}</div>
                        <div className="featured-seasons">
                            {item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}
                        </div>
                        <div className="featured-description">{item.overview}</div>
                        <div className="featured-buttons">
                            <a href={`/watch/${item.id}`} className="featured-watchButton">Assistir</a>
                            <a href={`/lists/add/${item.id}`} className="featured-listsButton">+ Minha Lista</a>
                        </div>
                        <div className="featured-genres">Gêneros: {genres.join(', ')}</div>
                    </div>
                </div>
            </section>
        
    )
}

export default FeaturedMovie;