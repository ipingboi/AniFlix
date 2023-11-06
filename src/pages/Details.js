import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Details = () => {
  const params = useParams();
  const [anime, setAnime] = useState({});
  const [char, setChar] = useState({});
  const [char2, setChar2] = useState({});
  const [char3, setChar3] = useState({});
  const [char4, setChar4] = useState({});
  const [char5, setChar5] = useState({});
  const [char6, setChar6] = useState({});
  const [char7, setChar7] = useState({});
  const [char8, setChar8] = useState({});

  useEffect(() => {
    async function fetchAnime() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}`
      );
      const json = await response.json();
      setAnime(json);
    }

    async function fetchChar() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/characters`
      );
      const character = await response.json();
      setChar(character.data[0]);
    }
    async function fetchChar2() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/characters`
      );
      const character2 = await response.json();
      setChar2(character2.data[1]);
    }
    async function fetchChar3() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/characters`
      );
      const character3 = await response.json();
      setChar3(character3.data[2]);
    }
    async function fetchChar4() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/characters`
      );
      const character4 = await response.json();
      setChar4(character4.data[3]);
    }
    async function fetchChar5() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/characters`
      );
      const character5 = await response.json();
      setChar5(character5.data[4]);
    }
    async function fetchChar6() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/characters`
      );
      const character6 = await response.json();
      setChar6(character6.data[5]);
    }
    async function fetchChar7() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/characters`
      );
      const character7 = await response.json();
      setChar7(character7.data[6]);
    }
    async function fetchChar8() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/characters`
      );
      const character8 = await response.json();
      setChar8(character8.data[7]);
    }
    fetchAnime();
    fetchChar();
    fetchChar2();
    fetchChar3();
    fetchChar4();
    fetchChar5();
    fetchChar6();
    fetchChar7();
    fetchChar8();
    
  }, [params.id]);

  return (
    <div>
      <div className="space">
        <section
          id="welcome-section"
          className="screen-width"
        >
          <div className="information">
            <div className="poster">
              <img
                src={anime.data?.images?.jpg?.large_image_url}
                alt=""
              />
            </div>
            <div className="description">
              <h1>{anime.data?.title}</h1>
              <div className="title">
                <button className="button title_button">
                  <i className="fa-solid fa-play" /> Watch Now
                </button>
                <button className="button title_button">
                  <i className="fa-solid fa-plus" /> Add to List
                </button>
              </div>
              <div className="sub-header">
                <p id="sub-header-1">
                  <span className="bold">Alias: </span>
                  <span className="italic">
                  {anime.data?.title_japanese}
                  </span>
                </p>
                <p id="sub-header-2">
                  <span className="bold">Original Airing: </span>
                  <span className="italic">
                    {anime.data?.aired?.string}
                  </span>
                </p>
                <p id="sub-header-1">
                  <span className="bold">Genre: </span>
                  <span className="italic">
                  {anime.data?.genres ? (
                    <span>
                      {anime.data?.genres.map((genre) => (
                        <span
                          className="blue-color fst-italic"
                          key={genre.mal_id}
                        >
                          {' '}
                          {genre.name}
                        </span>
                      ))}
                    </span>
                  ) : (
                    ''
                  )}
                  </span>
                </p>
              </div>
              <div className="space">
                <p>
                {anime.data?.synopsis}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="share">
          <div className="socials">
            <div>
              <h5>
                <i className="fa-solid fa-share" /> Share This Anime
              </h5>
            </div>
            <button className="button socials_button">
              <i className="fa-brands fa-telegram" /> TELEGRAM
            </button>
            <button className="button socials_button">
              <i className="fa-brands fa-reddit" /> REDDIT
            </button>
            <button className="button socials_button">
              <i className="fa-brands fa-facebook" /> FACEBOOK
            </button>
            <button className="button socials_button">
              <i className="fa-brands fa-whatsapp" /> WHATSAPP
            </button>
            <button className="button socials_button">
              <i className="fa-brands fa-square-tumblr" /> TUMBLR
            </button>
          </div>
        </section>
        <div className="container">
          <section
            id="general-information"
            className="screen-width"
          >
            <div className="general-information">
              <div className="left-column">
                <h2>GENERAL INFORMATION</h2>
                <div className="project-tile">
                  <div className="sub-header">
                    <table className="info-tile">
                      <tbody>
                        <tr>
                          <th
                            className="info-tile-label"
                            scope="row"
                          >
                            Studio(s):
                          </th>
                          <td className="info-tile-data italic">{anime.data?.studios ? (
                    <span>
                      {anime.data?.studios.map((studio) => (
                        <span
                          className="blue-color fst-italic"
                          key={studio.mal_id}
                        >
                          {' '}
                          {studio.name}
                        </span>
                      ))}
                    </span>
                  ) : (
                    ''
                  )}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="borderClass" />
                    <table className="info-tile">
                      <tbody>
                        <tr>
                          <th
                            className="info-tile-label"
                            scope="row"
                          >
                            Director(s):
                          </th>
                          <td className="info-tile-data italic">
                            Haruo Sotozaki
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="borderClass" />
                    <table className="info-tile">
                      <tbody>
                        <tr>
                          <th
                            className="info-tile-label"
                            scope="row"
                          >
                            Producer(s):{' '}
                          </th>
                          <td className="info-tile-data italic">{anime.data?.producers ? (
                    <span>
                      {anime.data?.producers.map((producer) => (
                        <span
                          className="blue-color fst-italic"
                          key={producer.mal_id}
                        >
                          {' '}
                          {producer.name}
                        </span>
                      ))}
                    </span>
                  ) : (
                    ''
                  )}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="borderClass" />
                    <table className="info-tile">
                      <tbody>
                        <tr>
                          <th
                            className="info-tile-label"
                            scope="row"
                          >
                            Licensor:{' '}
                          </th>
                          <td className="info-tile-data italic">
                          {anime.data?.licensors ? (
                    <span>
                      {anime.data?.licensors.map((licensor) => (
                        <span
                          className="blue-color fst-italic"
                          key={licensor.mal_id}
                        >
                          {' '}
                          {licensor.name}
                        </span>
                      ))}
                    </span>
                  ) : (
                    ''
                  )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="borderClass" />
                    <table className="info-tile">
                      <tbody>
                        <tr>
                          <th
                            className="info-tile-label"
                            scope="row"
                          >
                            Status:
                          </th>
                          <td className="info-tile-data italic">{anime.data?.status}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <h2>CAST</h2>
              <div className='row justify-content-evenly text-center blue-color'>
              <div className="card" style={{ width: "18rem" }}>
                <img src={char.character?.images?.jpg?.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{char.character?.name}</h5>
                  <p className="card-text">
                  {char.role}
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src={char2.character?.images?.jpg?.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{char2.character?.name}</h5>
                  <p className="card-text">
                  {char2.role}
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src={char3.character?.images?.jpg?.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{char3.character?.name}</h5>
                  <p className="card-text">
                  {char3.role}
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src={char4.character?.images?.jpg?.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{char4.character?.name}</h5>
                  <p className="card-text">
                  {char4.role}
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src={char5.character?.images?.jpg?.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{char5.character?.name}</h5>
                  <p className="card-text">
                  {char5.role}
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src={char6.character?.images?.jpg?.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{char6.character?.name}</h5>
                  <p className="card-text">
                  {char6.role}
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src={char7.character?.images?.jpg?.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{char7.character?.name}</h5>
                  <p className="card-text">
                  {char7.role}
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src={char8.character?.images?.jpg?.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{char8.character?.name}</h5>
                  <p className="card-text">
                  {char8.role}
                  </p>
                </div>
              </div>
            </div>
            </div>
          </section>

          <p className="comment-post">Comment Section:</p>
          <div className="posted-comment"></div>
          <textarea
            rows={4}
            cols={50}
            name="comment"
            form="comment"
            id="comment"
            placeholder="Share your thoughts....."
            required=""
            defaultValue={''}
          />
          <button className="button_comment">Submit</button>
        </div>
      </div>
    </div>
  );
};
