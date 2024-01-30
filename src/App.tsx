import Box0 from "./component/Box0";
import Box1 from "./component/Box1";
import Box2 from "./component/Box2";
import Box3 from "./component/Box3";
import { arrPhotoCarousel } from "./utility/arrayPhoto";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="min-h-[100vh] w-full relative">
      <Box0 />
      <Box1 />
      <Box2 />
      <Box3 slide={arrPhotoCarousel} />
    </div>
  );
}

export default App;
