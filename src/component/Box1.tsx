import Timer from "./Timer";

const Box1 = () => {
  return (
    <div className="min-h-[100vh] mx-auto flex flex-col items-center justify-center bg-[transparent]">
      <div className="text-center text-[#fa975a] translate-y-[40%] w-full">
        <div>
          <h1 className="font-[800] text-[72px] tracking-wider">MARRIAGE</h1>
          <h4 className="font-[700] text-[30px] tracking-wide">OCCURRING IN</h4>
        </div>
        <Timer />
      </div>
    </div>
  );
};

export default Box1;
