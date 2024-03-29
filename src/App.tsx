import Box1 from "./component/Box1";
import Box2 from "./component/Box2";
import Box3 from "./component/Box3";
import Box0 from "./component/Box0";
import { arrPhotoCarousel } from "./utility/arrayPhoto";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box4 from "./component/Box4";
import Footer from "./component/Footer";
import CommentFB from "./component/CommentFB";

function App() {
  return (
    <div className="min-h-[100vh] min-w-[300px] w-full flex flex-col items-center">
      <Box0 />
      <Box1 />
      <Box2 />
      <Box3 slide={arrPhotoCarousel} />
      <Box4 />
      <CommentFB />
      <Footer />
    </div>
  );
}

export default App;
