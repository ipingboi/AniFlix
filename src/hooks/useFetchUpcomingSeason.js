import { useState, useEffect } from 'react';

export const useFetchUpcomingSeason = () => {
  const [data, setData] = useState([]);
  const url = `https://api.jikan.moe/v4/seasons/upcoming`;

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