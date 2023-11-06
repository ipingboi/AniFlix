import { useState, useEffect } from 'react';
import { ActionCards } from '../components';


export const Genres = () => {
    const [actionAnimes, setActionAnimes] = useState([]);
    async function fetchActionAnimes() {
      const response = await fetch('https://api.jikan.moe/v4/anime?genres=1');
      const data = await response.json();
      setActionAnimes(data.data);
      console.log(data.data);
    }
    
    useEffect(() => {
        fetchActionAnimes();
      }, []);

  return (
    <div className='container'>
        <h4>
          Results for Action Animes
        </h4>
      
        <div className='row justify-content-evenly'>
        {actionAnimes.map((anime) => (
          <ActionCards
            key={anime.mal_id}
            anime={anime}
          />
        ))}
        </div>
    </div>
  );
};