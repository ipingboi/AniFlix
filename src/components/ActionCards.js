import { Link } from 'react-router-dom';

export const ActionCards = ({ actionAnimes }) => {
  const image = actionAnimes.images?.jpg?.image_url;

  return (
    <div
      className="card"
      style={{ width: '18rem' }}
    >
      <Link to={`/anime?genres=1}`}>
        <img
          className="card-img-top"
          src={image}
          alt="Card image cap"
        />
      </Link>
      <div className="card-body text-center">
        <p className="card-text">
          <h5>{actionAnimes.title}</h5>
          <i className="bi bi-star-fill"><span> {actionAnimes.score} / 10</span> </i>
           
        </p>
      </div>
    </div>
  );
};