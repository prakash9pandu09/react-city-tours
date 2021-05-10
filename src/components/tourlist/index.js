import { useState } from "react";
import Tour from "../tour/tour";
import "./tourlist.scss";
import { tourData } from "./../../tourData";

const ToursList = () => {
  const [tours, setTours] = useState(tourData);
  const removeTour = (id) => {
    console.log("remove");
    setTours(tours.filter((tour) => tour.id !== id));
  };
  return (
    <section className="tour-list">
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default ToursList;
