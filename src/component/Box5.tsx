import envelope from "../assets/envelope.svg";
import qrCode from "../assets/Screenshot 2567-01-30 at 16.54.43.png";

const Box5 = () => {
  return (
    <div className="bg-[white] min-h-[100vh]">
      <div className="flex justify-center items-center mb-5">
        <img src={envelope} alt="envelope" />
        <div className="text-[25px] tracking-wider">ร่วมใส่ซองได้ตรงนี้</div>
      </div>
      <div className="flex justify-around items-center">
        <div className="flex items-center">
          <img
            src="https://lh4.googleusercontent.com/proxy/LADsKocVIv1nKgiQNDiLK4V304i9xtApOP2mBAb4ckuToZUZj-9lxMRxpBKeJpYGNKo08lp-YNWXF0dC4UWWO8rsmVjTL67SRTgq9jdkqg"
            alt=""
            width={150}
            height={150}
          />
          <div className="tracking-wider text-[24px] flex flex-col justify-center items-center">
            <span>ธนาคารไทยพาณิชย์ </span>
            <span> นายปรมัตถ์ แถบเงิน</span>
            <span>8162564231</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img src={qrCode} alt="" />
          <div className="text-[22px] tracking-wider">
            Prompt pay : นายปรมัตถ์ แถบเงิน
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box5;
