import { useState, useEffect } from 'react';

export const useFetch = (apiPath, queryTerm = '') => {
  const [data, setData] = useState([]);
  const url = `https://api.jikan.moe/v4/anime?=${queryTerm}`;

  useEffect(() => {
    async function fetchAnime() {
      const response = await fetch(url);

      const json = await response.json();
      setData(json.results);
    }

    fetchAnime();
  }, [url]);

  return { data };
};
