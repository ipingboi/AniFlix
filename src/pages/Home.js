import { Link } from 'react-router-dom';
import {
  TopAnimes,
  ActionAnimes,
  AdventureAnimes,
  ComedyAnimes,
} from '../components';

export const Home = () => {
  return (
    <section className="bg-black blue-color">
      <div className="iframe-container">
        <iframe
          width={1680}
          height={700}
          src="https://www.youtube.com/embed/e8YBesRKq_U?rel=0?version=3&enablejsapi=1&wmode=opaque&autoplay=1&mute=1&controls=0&playlist=e8YBesRKq_U&loop=1&showinfo=0"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
      
      <TopAnimes />
      <ActionAnimes  />
      <AdventureAnimes />
      <ComedyAnimes />
    
    </section>
  );
};