import {
  Component,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import Slider from "react-slick";

interface SlideProps {
  slide: string[];
}

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
      autoplaySpeed: 5000,
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
      <div className="w-full bg-[url('src/assets/bg-box3.svg')] bg-no-repeat bg-cover bg-center min-h-[100vh] flex flex-col justify-center items-center">
        <div className="w-full mx-auto">
          <Slider {...settings}>
            {slide.map((item: string, index: number) => {
              return (
                <div className="w-[350px]" key={`carousel-${index}`}>
                  <img src={item} className="w-[350px] h-[500px]" />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="mt-[40px] w-full text-center">#imnestThemoment</div>
      </div>
    );
  }
}
