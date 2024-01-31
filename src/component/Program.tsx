import React from "react";

type Props = {};

const Program = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-[5rem] text-primary text-[24px]">
      <div className="flex flex-col items-center">
        <span className="text-center font-[kanit]">07.09 น.</span>
        <span className="text-center">พิธีเจริญพุทธมนต์เช้า</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-center font-[kanit]">09.09 น.</span>
        <span className="text-center">พิธีขันหมาก/พิธีสู่ขอ</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-center font-[kanit]">09.29 น.</span>
        <span className="text-center">พิธีสวมแหวน/พิธีรับไหว้</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-center font-[kanit]">10.09 น.</span>
        <span className="text-center">พิธีหลั่งน้ำพระพุทธมนต์ปราสาทพร</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-center font-[kanit]">11.30 น.</span>
        <span className="text-center">รับประทานอาหาร</span>
      </div>
      {/* - เวลา 7.09 น. พิธีเจริญพุทธมนต์เช้า - เวลา 9.09 น. พิธีขันหมาก/พิธีสู่ขอ
      - เวลา 9.29 น. พิธีสวมแหวน/พิธีรับไหว้ - เวลา 10.09 น.
      พิธีหลั่งน้ำพระพุทธมนต์ปราสาทพร - เวลา 11.30 น. รับประทานอาหาร */}
    </div>
  );
};

export default Program;
