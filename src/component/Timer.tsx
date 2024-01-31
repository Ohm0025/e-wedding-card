import { useEffect, useState } from "react";
import { BoxTimeProps } from "../interface/props";
import { difInMs, formatTime } from "../utility/calDiffTime";

const BoxColon = () => {
  return (
    <div className="flex flex-col justify-center items-center translate-y-[10px] text-[25px] sm:text-[50px] main-char">
      <div>:</div>
    </div>
  );
};

const BoxTime = ({ timeUnit, timeValue }: BoxTimeProps) => {
  return (
    <div className="">
      <div className="text-[30px] ssm:text-[50px] sm:text-[100px] main-char">
        {timeValue}
      </div>
      <div className="leading-3 text-[14px] ssm:text-[16px] unit-time">
        {timeUnit}
      </div>
    </div>
  );
};

const Timer = () => {
  const [ms, setMs] = useState<number>(difInMs());

  useEffect(() => {
    let myInterval = setInterval(() => {
      setMs((prev) => prev - 1000);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  const timeObj = formatTime(ms);

  return (
    <div className="flex justify-around items-center w-[80%] min-w-[250px] mx-auto gap-4 text-[Courgette] box-border px-2">
      <BoxTime timeUnit={"Days"} timeValue={timeObj.day} />
      <BoxColon />
      <BoxTime timeUnit={"Hours"} timeValue={timeObj.hr} />
      <BoxColon />
      <BoxTime timeUnit={"Minutes"} timeValue={timeObj.min} />
      <BoxColon />
      <BoxTime timeUnit={"Seconds"} timeValue={timeObj.sec} />
      {/* <Countdown date={new Date("06-06-2024").getTime()}>
      <span>You are good to go!</span>
      </Countdown> */}
    </div>
  );
};

export default Timer;
