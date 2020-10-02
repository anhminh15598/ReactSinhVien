import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    const styleImg = { height: "600px", width: "100%" };
    return (
      <div>
        <div id="carouselId" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#carouselId"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselId" data-slide-to={1} />
            <li data-target="#carouselId" data-slide-to={2} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img
                style={styleImg}
                src="https://image.freepik.com/free-vector/abstract-black-yellow-grunge-background_1017-26684.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                style={styleImg}
                src="https://image.freepik.com/free-vector/abstract-3d-black-technology-background-overlap-layers-dark-space-with-orange-light-effect-decoration_135960-91.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                style={styleImg}
                src="https://image.freepik.com/free-vector/abstract-ink-splatter-grunge-background_1017-26677.jpg"
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselId"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselId"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
