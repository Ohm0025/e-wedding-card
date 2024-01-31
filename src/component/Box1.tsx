import Timer from "./Timer";

const Box1 = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center bg-[transparent] w-full">
      <div className="text-center text-primary translate-y-[40%] w-full">
        <div>
          <h1 className="font-[800px] text-[36px] ssm:text-[45px] sm:text-[80px] tracking-wider main-char">
            MARRIAGE
          </h1>
          <h4 className="font-[700px] text-[25px] sm:text-[30px] tracking-wide main-char">
            OCCURRING IN
          </h4>
        </div>
        <Timer />
      </div>
    </div>
  );
};

export default Box1;
