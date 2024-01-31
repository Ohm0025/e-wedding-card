import lineVector from "../assets/line.svg";
import picture1 from "../assets/16353.jpg";
import Program from "./Program";
import TimeLine from "./TimeLine";
// import bgSvg from "../assets/bg-box3.svg";

const Box2 = () => {
  return (
    <div
      className={`min-h-[100vh] bg-[url('/Users/apple/Desktop/kaio_practise/projectHandOn/e-wedding-card/src/assets/bg-box3.svg')] bg-no-repeat bg-cover bg-center w-full pt-8 mx-auto`}>
      <div className="flex flex-col items-center justify-center">
        <div className="text-[26px] sm:text-[30px] tracking-wide text-center text-primary">
          INVITE YOU TO CELEBRATE OUR MARRIAGE
        </div>
        <div className="text-[20px] flex items-center justify-center gap-4 w-full">
          <div className="w-[100px]">
            <img src={lineVector} alt="line-svg" />
          </div>
          <div className="text-[14px] sm:text-[20px] text-primary">
            {"06 APRIL 2024"}
          </div>

          <div className="w-[100px]">
            <img src={lineVector} alt="line-svg" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 text-[36px] mb-8 text-primary">
        <span className="text-center max-sm:text-[26px]">
          Pansawalee Wiriyaattasombat
        </span>
        <span className="text-center max-sm:text-[26px]">And</span>
        <span className="text-center max-sm:text-[26px]">Sikharin Janthon</span>
      </div>
      <div className="mx-auto sm:flex justify-center gap-10 items-center">
        <div className="mx-auto sm:mx-0 pt-5 sm:pt-0 w-[300px] sm:pl-6 sm:w-[500px]">
          <img src={picture1} alt="sample_pic1" />
        </div>

        <div className="flex items-center">
          <TimeLine />
          <Program />
        </div>
      </div>
    </div>
  );
};

export default Box2;
