import lineVector from "../assets/line.svg";
import picProgram from "../assets/Screenshot 2567-01-30 at 08.24.03.png";
// import bgSvg from "../assets/bg-box3.svg";

const Box2 = () => {
  return (
    <div
      className={`min-h-[100vh] bg-[url('/Users/apple/Desktop/kaio_practise/projectHandOn/e-wedding-card/src/assets/bg-box3.svg')] bg-no-repeat bg-cover bg-center w-full pt-8 mx-auto`}>
      <div className="flex flex-col items-center justify-center">
        <div className="text-[30px] tracking-wide text-center">
          INVITE YOU TO CELEBRATE OUR MARRIAGE
        </div>
        <div className="text-[20px] flex items-center justify-center gap-4 w-full">
          <div className="w-[100px]">
            <img src="src/assets/line.svg" alt="" />
          </div>
          <div className="text-[20px] text-[rgba(167,140,123,1)]">
            {"06 APRIL 2024"}
          </div>

          <div className="w-[100px]">
            <img src={lineVector} alt="line-svg" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 text-[36px]">
        <span>Pansawalee Wiriyaattasombat</span>
        <span>And</span>
        <span>Sikharin Janthon</span>
      </div>
      <div className="mx-auto flex justify-center gap-10 items-center">
        <div className="w-[500px]">
          <img
            src="https://cdn.pixabay.com/photo/2023/07/31/17/06/couple-8161451_1280.jpg"
            alt="sample_pic1"
          />
        </div>
        <div>
          <img src={picProgram} alt="sample-program" />
        </div>
      </div>
    </div>
  );
};

export default Box2;
