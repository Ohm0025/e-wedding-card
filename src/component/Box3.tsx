import {
  Component,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import Slider from "react-slick";
import { SlideProps } from "../interface/props";
import PhotoSlide from "./PhotoSlide";
//import bgSvg from "../assets/bg-box4.svg";
import { arrPhotoSlide } from "../utility/arrayPhoto";

export default class SimpleSlider extends Component<SlideProps> {
  render() {
    const { slide } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],

      nextArrow: <></>,
      prevArrow: <></>,
      appendDots: (
        dots:
          | string
          | number
          | boolean
          | ReactElement<any, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | ReactPortal
          | null
          | undefined
      ) => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
            zIndex: 3,
          }}>
          <ul style={{}}> {dots} </ul>
        </div>
      ),
      customPaging: () => (
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "gray",
            borderRadius: "100%",
          }}>
          {}
        </div>
      ),
    };

    return (
      <div
        className={`w-full bg-[url('/Users/apple/Desktop/kaio_practise/projectHandOn/e-wedding-card/src/assets/bg-box4.svg')] bg-no-repeat bg-cover bg-center min-h-[100vh] flex flex-col justify-center items-center`}>
        <div className="w-full mx-auto">
          <Slider {...settings}>
            {slide.map((item: string, index: number) => {
              return (
                <div className="px-5 py-3 override" key={`carousel-${index}`}>
                  <img src={item} className="w-full h-auto rounded-md" />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="mt-[40px] w-full text-center">
          <div className="mb-[40px] tracking-wider">#imnestThemoment</div>
          <PhotoSlide slide={arrPhotoSlide} />
        </div>
      </div>
    );
  }
}
