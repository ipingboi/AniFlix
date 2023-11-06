import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


export const ComedyAnimes = () => {
  const [comedyAnimes, setComedyAnimes] = useState([]);
  const sliderRef = useRef(null);
  async function fetchComedyAnimes() {
    const response = await fetch('https://api.jikan.moe/v4/anime?genres=4');
    const data = await response.json();
    setComedyAnimes(data.data);
    const throttleProgressBar = throttle(() => {
      document
        .querySelectorAll('.sliderProgress-bar-Comedy')
        .forEach(calculateProgressBar);
    }, 250);

    window.addEventListener('resize', throttleProgressBar);

    document
      .querySelectorAll('.sliderProgress-bar-Comedy')
      .forEach(calculateProgressBar);
  }

  const calculateProgressBar = (progressBar) => {
    progressBar.innerHTML = '';
    const slider = progressBar
      .closest('.sliderRowComedy')
      .querySelector('.sliderComedy');

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
        barItem.classList.add('sliderProgress-item-Comedy');
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
      .closest('.sliderRowComedy')
      .querySelector('.sliderProgress-bar-Comedy');
    const slider = handle
      .closest('.sliderContainerComedy')
      .querySelector('.sliderComedy');
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue('--slider-index')
    );
    const progressBarItemCount = progressBar ? progressBar.children.length : 0;

    if (handle.classList.contains('left-handle-Comedy')) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty('--slider-index', progressBarItemCount - 1);
      } else {
        slider.style.setProperty('--slider-index', sliderIndex - 1);
      }
    }

    if (handle.classList.contains('right-handle-Comedy')) {
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
    if (e.target.matches('.handleComedy')) {
      handle = e.target;
    } else {
      handle = e.target.closest('.handleComedy');
    }
    if (handle != null) onHandleClick(handle);
  };

  useEffect(() => {
    fetchComedyAnimes();
    setTimeout(() => {
      fetchComedyAnimes();
    }, 20000);
  }, []);

  return (
    <div className="sliderRowComedy pt-4">
      <div className="header">
        <h3 className="title">Comedy Animes</h3>
        <div className="sliderProgress-bar-Comedy"></div>
      </div>
      <div
        className="sliderContainerComedy"
        ref={sliderRef}
      >
        <button
          className="handleComedy left-handle-Comedy"
          onClick={handleButtonClick}
        >
          &#8249;
        </button>
        {comedyAnimes && comedyAnimes.length ? (
          <div className="sliderComedy">
            {comedyAnimes.map((anime) => (  
              <img
                key={anime.mal_id}
                url={<Link to={`/anime/${anime.mal_id}`}></Link>}
                src={anime.images.webp.image_url}
                alt=""
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
          className="handleComedy right-handle-Comedy"
          onClick={handleButtonClick}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

