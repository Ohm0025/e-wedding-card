import React from "react";

type Props = {};

const Box2 = (props: Props) => {
  return (
    <div className="min-h-[100vh] bg-[white] w-full pt-8 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="text-[30px] tracking-wide text-center">
          INVITE YOU TO CELEBRATE OUR MARRIAGE
        </div>
        <div className="text-[20px] flex items-center justify-center gap-4 w-full">
          <div className="w-[100px]">
            <img src="src/assets/line.svg" alt="" />
          </div>
          <div className="">{"08 MAY 2022"}</div>
          <div className="w-[100px]">
            <img src="src/assets/line.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-center gap-10 items-center">
        <div className="w-[500px]">
          <img
            src="https://cdn.pixabay.com/photo/2023/07/31/17/06/couple-8161451_1280.jpg"
            alt="sample_pic1"
          />
        </div>
        <div>
          <img
            src="src/assets/Screenshot 2567-01-30 at 08.24.03.png"
            alt="sample-program"
          />
        </div>
      </div>
    </div>
  );
};

export default Box2;
