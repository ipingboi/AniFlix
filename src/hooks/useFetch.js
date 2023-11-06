import { useState, useEffect } from 'react';

export const useFetch = (queryTerm = '') => {
  const [data, setData] = useState([]);
  const url = `https://api.jikan.moe/v4/anime?q=${queryTerm}&sfw`;

  useEffect(() => {
    async function fetchAnime() {
      const response = await fetch(url);

      const json = await response.json();
      setData(json.data);
    }

    fetchAnime();
  }, [url]);

  return { data };
};
