import { useState, useEffect, useRef } from 'react';

export const TopAnimes = () => {
  const [topAnimes, setTopAnimes] = useState([]);
  const sliderRef = useRef(null);

  async function fetchTopAnimes() {
    const response = await fetch('https://api.jikan.moe/v4/top/anime');
    const data = await response.json();
    setTopAnimes(data.data);
    const throttleProgressBar = throttle(() => {
      document
        .querySelectorAll('.sliderProgress-bar')
        .forEach(calculateProgressBar);
    }, 250);

    window.addEventListener('resize', throttleProgressBar);

    document
      .querySelectorAll('.sliderProgress-bar')
      .forEach(calculateProgressBar);
  }
  const calculateProgressBar = (progressBar) => {
    progressBar.innerHTML = '';
    const slider = progressBar.closest('.sliderRow').querySelector('.slider');

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
        barItem.classList.add('sliderProgress-item');
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
      .closest('.sliderRow')
      .querySelector('.sliderProgress-bar');
    const slider = handle.closest('.sliderContainer').querySelector('.slider');
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue('--slider-index')
    );
    const progressBarItemCount = progressBar ? progressBar.children.length : 0;

    if (handle.classList.contains('left-handle')) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty('--slider-index', progressBarItemCount - 1);
      } else {
        slider.style.setProperty('--slider-index', sliderIndex - 1);
      }
    }

    if (handle.classList.contains('right-handle')) {
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
    if (e.target.matches('.handle')) {
      handle = e.target;
    } else {
      handle = e.target.closest('.handle');
    }
    if (handle != null) onHandleClick(handle);
  };

  useEffect(() => {
    fetchTopAnimes();
    setTimeout(() => {
      fetchTopAnimes();
    }, 5000);
  }, []);

  return (
    <div className="sliderRow pt-4">
      <div className="header">
        <h3 className="title ">Top Animes</h3>
        <div className="sliderProgress-bar"></div>
      </div>
      <div
        className="sliderContainer"
        ref={sliderRef}
      >
        <button
          className="handle left-handle"
          onClick={handleButtonClick}
        >
          &#8249;
        </button>
        {topAnimes && topAnimes.length > 0 ? (
          <div className="slider">          
            {topAnimes.map((anime) => (   
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
          className="handle right-handle"
          onClick={handleButtonClick}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};