import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import Logo from '../assets/aniflix_logo.png';

export const Header = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      const queryTerm = e.target.search.value;
      e.target.reset();
      return navigate(`/anime?q=${queryTerm}`);
    }
  
    return(
        <nav id="main-menu" className="navbar sticky-top bg-dark">
  <div className="container">
    <div className="pt-3 pb-2">
      <button
        className="btn btn-info bg-color me-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <i className="bi bi-list" />
      </button>
      <div
        className="offcanvas offcanvas-start bg-dark"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex={-1}
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title blue-color"
            id="offcanvasScrollingLabel"
          >
            <strong>Welcome to AniFlix</strong>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <ul className="genres">
            <li className="pb-1">
              <Link
                to="top/anime"
              >
                <h4>Top Anime</h4>
              </Link>
            </li>
            <li className="pb-1">
              <Link
                to="seasons/upcoming"
              >
                <h4>Upcoming Seasons</h4>
              </Link>
            </li>
            </ul>
        <div className="offcanvas-body">
          <h5 className="blue-color">Genres</h5>
          <ul className="genres">
            <li className="pb-1">
              <Link
                to="anime?genres=1"
              >
                Action
              </Link>
            </li>
            <li className="pb-1">
              <Link
                to="anime/genre/${anime.mal_id}"
              >Adventure</Link>
            </li>
            <li className="pb-1">
              <Link
                to="anime/genre/${anime.mal_id}"
              >Avant Garde</Link>
            </li>
            <li className="pb-1">
              <Link
                to="anime/genre/${anime.mal_id}"
              >Award Winning</Link>
            </li>
            <li className="pb-1">
              <Link
                to="anime/genre/${anime.mal_id}"
              >Boys Love</Link>
            </li>
            <li className="pb-1">
              <Link
                to="anime/genre/${anime.mal_id}"
              >Comedy</Link>
            </li>
            <li className="pb-1">
              <Link
                to="anime/genre/${anime.mal_id}"
              >Drama</Link>
            </li>
            <li className="pb-1">
              <Link
                to="anime/genre/${anime.mal_id}"
              >Fantasy</Link>
            </li>
            <li className="pb-1">
              <Link
                to="anime/genre/${anime.mal_id}"
              >Girl's Love</Link>
            </li>
            <li className="pb-1">
              <Link
                to="anime/genre/${anime.mal_id}"
              >Gourmet</Link>
            </li>
            <li className="pb-1">
              <Link
                to="anime/genre/${anime.mal_id}"
              >Horror</Link>
            </li>
          </ul>
        </div>
      </div>
      <Link to="" className="navbar-brand">
        <img src={Logo} alt="Aniflix Logo" width={150} />
      </Link>
    </div>
    <form onSubmit={handleSubmit} className="d-flex pt-3 pb-2">
      <div className="input-group me-2" id="search-here">
        <input
          type="text"
          name="search"
          id="search"
          className="form-control"
          placeholder="Search Anime"
        />
        <button className="btn btn-info bg-color">
          <i className="bi bi-search" />
        </button>
      </div>
      <a
        href="#"
        className="btn btn-outline-info bg-color black-color"
        data-bs-toggle="modal"
        data-bs-target="#login"
      >
        Login
      </a>
    </form>
  </div>
</nav>
    )
} 
