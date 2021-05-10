import { useState } from "react";
import "./tour.scss";

const Tour = (props) => {
  const { id, city, img, name, info } = props.tour;
  const { removeTour } = props;
  const [showInfo, setShowInfo] = useState(false);
  const displayInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <article className="tour">
      <div className="image-container">
        <img width="200" src={img} alt="" />
        <span className="close-icon" onClick={() => removeTour(id)}>
          <i className="fas fa-window-close"></i>
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info
          <span onClick={displayInfo}>
            <i className="fas fa-caret-square-down"></i>
          </span>
        </h5>
        <p>{showInfo && info}</p>
      </div>
    </article>
  );
};

export default Tour;
