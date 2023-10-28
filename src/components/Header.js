import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Logo from '../assets/aniflix_logo.png';
import Ham from '../assets/hamburger.svg';


export const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
        <div className="offcanvas-body">
          <h5 className="blue-color">Genres</h5>
          <ul className="genres">
            <li className="pb-1">
              <a
                href="https://myanimelist.net/anime/genre/1/Action"
                target="_blank"
                rel="noopener noreferrer"
              >
                Action
              </a>
            </li>
            <li className="pb-1">
              <a href="#">Adventure</a>
            </li>
            <li className="pb-1">
              <a href="#">Avant Garde</a>
            </li>
            <li className="pb-1">
              <a href="#">Award Winning</a>
            </li>
            <li className="pb-1">
              <a href="#">Boys Love</a>
            </li>
            <li className="pb-1">
              <a href="#">Comedy</a>
            </li>
            <li className="pb-1">
              <a href="#">Drama</a>
            </li>
            <li className="pb-1">
              <a href="#">Fantasy</a>
            </li>
            <li className="pb-1">
              <a href="#">Girl's Love</a>
            </li>
            <li className="pb-1">
              <a href="#">Gourmet</a>
            </li>
            <li className="pb-1">
              <a href="#">Horror</a>
            </li>
          </ul>
        </div>
      </div>
      <a href="index.html" className="navbar-brand">
        <img src={Logo} alt="Aniflix Logo" width={150} />
      </a>
    </div>
    <form className="d-flex pt-3 pb-2">
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
