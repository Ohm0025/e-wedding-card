import Box0 from "./component/Box0";
import Box1 from "./component/Box1";
import Box2 from "./component/Box2";
import Box3 from "./component/Box3";
import { arrPhotoCarousel } from "./utility/arrayPhoto";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box4 from "./component/Box4";
import Box5 from "./component/Box5";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="min-h-[100vh] min-w-[325px] w-full flex flex-col items-center">
      <div className="relative">
        <Box0 />
      </div>
      <Box1 />
      <Box2 />
      <Box3 slide={arrPhotoCarousel} />
      <Box4 />
      <Box5 />
      <Footer />
    </div>
  );
}

export default App;
