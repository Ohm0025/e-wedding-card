import { Component } from "react";
import Slider from "react-slick";
import { SlideProps } from "../interface/props";

export default class Fade extends Component<SlideProps> {
  render() {
    const { slide } = this.props;
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <></>,
      prevArrow: <></>,
    };
    return (
      <div className="xl:max-w-[1000px] xl:mx-auto xl:rounded-md xl:overflow-hidden">
        <Slider {...settings}>
          {slide.map((item: string, index: number) => {
            return (
              <div key={`photo-slide-${index}`}>
                <img
                  src={item}
                  className="w-full h-auto max-h-[640px] sm:h-[640px]"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
