import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export const AdventureAnimes = () => {
  const [adventureAnimes, setAdventureAnimes] = useState([]);
  const sliderRef = useRef(null);
  async function fetchAdventureAnimes() {
    const response = await fetch('https://api.jikan.moe/v4/anime?genres=2');
    const data = await response.json();
    setAdventureAnimes(data.data);
    const throttleProgressBar = throttle(() => {
      document
        .querySelectorAll('.sliderProgress-bar-Adventure')
        .forEach(calculateProgressBar);
    }, 250);

    window.addEventListener('resize', throttleProgressBar);

    document
      .querySelectorAll('.sliderProgress-bar-Adventure')
      .forEach(calculateProgressBar);
  }

  const calculateProgressBar = (progressBar) => {
    progressBar.innerHTML = '';
    const slider = progressBar
      .closest('.sliderRowAdventure')
      .querySelector('.sliderAdventure');

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
        barItem.classList.add('sliderProgress-item-Adventure');
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
      .closest('.sliderRowAdventure')
      .querySelector('.sliderProgress-bar-Adventure');
    const slider = handle
      .closest('.sliderContainerAdventure')
      .querySelector('.sliderAdventure');
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue('--slider-index')
    );
    const progressBarItemCount = progressBar ? progressBar.children.length : 0;

    if (handle.classList.contains('left-handle-Adventure')) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty('--slider-index', progressBarItemCount - 1);
      } else {
        slider.style.setProperty('--slider-index', sliderIndex - 1);
      }
    }

    if (handle.classList.contains('right-handle-Adventure')) {
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
    if (e.target.matches('.handleAdventure')) {
      handle = e.target;
    } else {
      handle = e.target.closest('.handleAdventure');
    }
    if (handle != null) onHandleClick(handle);
  };

  useEffect(() => {
    fetchAdventureAnimes();
    setTimeout(() => {
      fetchAdventureAnimes();
    }, 15000);
  }, []);

  return (
    <div className="sliderRowAdventure pt-4">
      <div className="header">
        <h3 className="title">Adventure Animes</h3>
        <div className="sliderProgress-bar-Adventure"></div>
      </div>
      <div
        className="sliderContainerAdventure"
        ref={sliderRef}
      >
        <button
          className="handleAdventure left-handle-Adventure"
          onClick={handleButtonClick}
        >
          &#8249;
        </button>
        {adventureAnimes && adventureAnimes.length ? (
          <div className="sliderAdventure">
            {adventureAnimes.map((anime) => (
              
              <img
                key={anime.mal_id}
                src={anime.images.webp.image_url}
                alt={anime.title}
              />
              
            ))}
          </div>
        ) : (
          <div
            class="spinner-border text-info"
            role="status"
          >
            <span class="sr-only"></span>
          </div>
        )}
        <button
          className="handleAdventure right-handle-Adventure"
          onClick={handleButtonClick}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};
