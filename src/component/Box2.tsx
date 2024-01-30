import React from "react";

type Props = {};

const Box2 = (props: Props) => {
  return (
    <div className="min-h-[100vh] bg-[white] w-full">
      <div className="mx-auto flex justify-center">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/07/31/17/06/couple-8161451_1280.jpg"
            alt="sample_pic1"
          />
        </div>
        <div>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Box2;
