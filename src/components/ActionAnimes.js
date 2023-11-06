import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const ActionAnimes = () => {
  const [actionAnimes, setActionAnimes] = useState([]);
  const sliderRef = useRef(null);
  async function fetchActionAnimes() {
    const response = await fetch('https://api.jikan.moe/v4/anime?genres=1');
    const data = await response.json();
    setActionAnimes(data.data);
    const throttleProgressBar = throttle(() => {
      document
        .querySelectorAll('.sliderProgress-bar-Action')
        .forEach(calculateProgressBar);
    }, 250);

    window.addEventListener('resize', throttleProgressBar);

    document
      .querySelectorAll('.sliderProgress-bar-Action')
      .forEach(calculateProgressBar);
  }

  const calculateProgressBar = (progressBar) => {
    progressBar.innerHTML = '';
    const slider = progressBar
      .closest('.sliderRowAction')
      .querySelector('.sliderAction');

    if (slider) {
      const itemCount = slider.children.length;
      const itemsPerScreen = parseInt(
        getComputedStyle(slider).getPropertyValue('--items-per-screen')
      );
      let sliderIndex = parseInt(
        getComputedStyle(slider).getPropertyValue('--slider-index')
      );
      const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

      if (sliderIndex >= progressBarItemCount) {
        slider.style.setProperty('--slider-index', progressBarItemCount - 1);
        sliderIndex = progressBarItemCount - 1;
      }
      for (let i = 0; i < progressBarItemCount; i++) {
        const barItem = document.createElement('div');
        barItem.classList.add('sliderProgress-item-Action');
        if (i === sliderIndex) {
          barItem.classList.add('active');
        }
        progressBar.append(barItem);
      }
    }
  };

  const onHandleClick = (handle) => {
    if (!handle) {
      return;
    }

    const progressBar = handle
      .closest('.sliderRowAction')
      .querySelector('.sliderProgress-bar-Action');
    const slider = handle
      .closest('.sliderContainerAction')
      .querySelector('.sliderAction');
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue('--slider-index')
    );
    const progressBarItemCount = progressBar ? progressBar.children.length : 0;

    if (handle.classList.contains('left-handle-Action')) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty('--slider-index', progressBarItemCount - 1);
      } else {
        slider.style.setProperty('--slider-index', sliderIndex - 1);
      }
    }

    if (handle.classList.contains('right-handle-Action')) {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty('--slider-index', 0);
      } else {
        slider.style.setProperty('--slider-index', sliderIndex + 1);
      }
    }

    calculateProgressBar(progressBar);
  };

  const throttle = (cb, delay = 1000) => {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };

    return (...args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }

      cb(...args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  };

  const handleButtonClick = (e) => {
    let handle;
    if (e.target.matches('.handleAction')) {
      handle = e.target;
    } else {
      handle = e.target.closest('.handleAction');
    }
    if (handle != null) onHandleClick(handle);
  };

  useEffect(() => {
    fetchActionAnimes();
    setTimeout(() => {
      fetchActionAnimes();
    }, 10000);
  }, []);

  return (
    <div className="sliderRowAction pt-4">
      <div className="header">
        <h3 className="title">Action Animes</h3>
        <div className="sliderProgress-bar-Action"></div>
      </div>
      <div
        className="sliderContainerAction"
        ref={sliderRef}
      >
        <button
          className="handleAction left-handle-Action"
          onClick={handleButtonClick}
        >
          &#8249;
        </button>
        {actionAnimes && actionAnimes.length ? (
  <div className="sliderAction">
    {actionAnimes.map((anime) => (
      <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
        <img src={anime.images.jpg.image_url} alt="" />
      </Link>
    ))}
  </div>
) : (
  <div className="spinner-border text-info" role="status">
    <span className="sr-only"></span>
  </div>
)}
        <button
          className="handleAction right-handle-Action"
          onClick={handleButtonClick}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};