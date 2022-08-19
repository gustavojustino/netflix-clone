import React, { useEffect, useState } from 'react';
import tmdbApi from './tmdbApi';
import MovieRow from './components/MovieRow';

const App = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {

    const loadAll = async () => {
      let showLists = await tmdbApi.getHomeList();
      setMovieList(showLists);
    }

    loadAll();
  }, []);

  return (

    <div className="page">
      Header
      Destaque
      <section className="lists">

        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
        
      </section>
      Roda Pé
    </div>
  )
}


export default App;
