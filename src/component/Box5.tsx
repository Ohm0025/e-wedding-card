import envelope from "../assets/envelope.svg";
//import qrCode from "../assets/Screenshot 2567-01-30 at 16.54.43.png";
import CommentFB from "./CommentFB";

const Box5 = () => {
  return (
    <div className="bg-secondary min-h-[100vh] w-full">
      <div className="flex justify-center items-center mb-5">
        <img className="hidden sm:inline" src={envelope} alt="envelope" />
        <div className="text-[22px] sm:text-[25px] tracking-wider text-primary">
          ร่วมใส่ซองได้ตรงนี้
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-around items-center">
        <div className="flex items-center">
          <img
            src="https://lh4.googleusercontent.com/proxy/LADsKocVIv1nKgiQNDiLK4V304i9xtApOP2mBAb4ckuToZUZj-9lxMRxpBKeJpYGNKo08lp-YNWXF0dC4UWWO8rsmVjTL67SRTgq9jdkqg"
            alt=""
            width={150}
            height={150}
          />
          <div className="md:tracking-wider text-[18px] md:text-[24px] flex flex-col justify-center items-center">
            <span>ธนาคารไทยพาณิชย์ </span>
            <span> นายปรมัตถ์ แถบเงิน</span>
            <span>8162564231</span>
          </div>
        </div>

        {/* <div className="flex flex-col items-center gap-3">
          <img src={qrCode} alt="" />
          <div className="text-[16px] md:text-[22px] md:tracking-wider">
            Prompt pay : นายปรมัตถ์ แถบเงิน
          </div>
        </div> */}
      </div>

      <CommentFB />
    </div>
  );
};

export default Box5;
