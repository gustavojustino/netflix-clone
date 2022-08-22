// Hooks
import React, { useEffect, useState } from 'react';

// Components
import tmdbApi from './tmdbApi';
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Layouts
import './App.scss';


const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [scrollhidden, setScrollHidden] = useState(false);

  useEffect(() => {

    const loadAll = async () => {

      // Recebendo todas as listas
      let showLists = await tmdbApi.getHomeList();
      setMovieList(showLists);

      // Recebendo o Featured
      let originals = showLists.filter((item) => item.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdbApi.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);

    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setScrollHidden(true);
      } else {
        setScrollHidden(false);
      }
    }
      window.addEventListener('scroll', scrollListener);
      return () => {
        window.removeEventListener('scroll', scrollListener)};
    
  }, []);

  return (

    <div className="page">
      <Header scroll={scrollhidden}/>

      {featuredData && <FeaturedMovie item={featuredData}/>
      }
      <section className="lists">

        {movieList.map((item, key) => (
          <div>
          <MovieRow key={key} title={item.title} items={item.items}/>
          </div>
        ))}
        
      </section>
     
    <Footer/>
    </div>
  )
}


export default App;
