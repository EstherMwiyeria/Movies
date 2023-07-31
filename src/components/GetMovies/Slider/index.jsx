import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { getSlider } from "../../../utils/utilities";
import ImageContainer from "../../../atoms/ImageContainer";
import "./style.css";


const Slider = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const movies = await getSlider();
      setMovies(movies.results);
      setLoading(false);
    })();
  }, []);
  if (loading) {
    return <h1>Loading movies...</h1>;
  }
  const limit = 4;
  const display = movies.slice(0, limit);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="movies-slider">
      <Carousel {...sliderSettings}>
        {display.map((item) => (
          <div key={item.id} className="movie-slide">
            <ImageContainer props={item} className="movie-slide" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Slider;