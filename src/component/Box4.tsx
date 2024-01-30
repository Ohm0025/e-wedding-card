import EventCard from "./EventCard";
import iconCalendar from "../assets/calendar-todo-fill.svg";
import iconMapPin from "../assets/map.svg";
import iconShirt from "../assets/shirt.svg";
import MapDestination from "./MapDestination";

const detail1_1 = "วันเสาร์ที่ 6 เมษายน พ.ศ. 2567";
const detail1_2 = "เวลา 11:30 น. ฉลองมงคลสมรส";

const Box4 = () => {
  console.log(iconCalendar);
  return (
    <div className="min-h-[100vh] bg-[white] py-8">
      <div className="flex flex-col px-4">
        <div className="text-center tracking-wider mb-5 text-[#A78C7B] text-[30px]">
          EVENT ATTRACTIONS
        </div>
        <div className="flex items-start justify-between">
          <EventCard
            icon={iconCalendar}
            event="WHEN"
            detail1={detail1_1}
            detail2={detail1_2}
            Element={
              <a
                target="_blank"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NzZqZ2d0OWxvY2kyOWx0M2hicGhpamJsY2QgdG95b2htMDAyNUBt&amp;tmsrc=toyohm0025%40gmail.com">
                <button className="border border-[rgba(167,140,123,1)] px-2 py-1 rounded-sm shadow-md text-[#A78C7B]">
                  {" "}
                  Add to calendar
                </button>
              </a>
            }
          />
          <EventCard
            icon={iconMapPin}
            event="WHERE"
            detail1={"ณ About You สถานที่จัดงานแต่งและประชุม"}
            detail2={"จังหวัดฉะเชิงเทรา"}
            Element={
              <a
                href="https://maps.app.goo.gl/8X9LB9mPTqehPXbU8"
                target="_blank">
                <button className="border border-[rgba(167,140,123,1)] px-2 py-1 rounded-sm shadow-md text-[#A78C7B]">
                  Get directions
                </button>
              </a>
            }
          />
          <EventCard
            icon={iconShirt}
            event="THEME"
            detail1={"#imnestThemoment"}
            detail2={""}
            Element={
              <div>
                <div className="flex justify-center my-4">
                  <div className="w-[20px] h-[20px] circle bg-[#A78C7B]"></div>
                </div>
                <div className="text-[#A78C7B] text-center">
                  NO DRESS CODE BUT BE THE BEST OF YOU
                </div>
              </div>
            }
          />
        </div>
      </div>
      <div className="my-[50px]">
        <MapDestination />
      </div>
    </div>
  );
};

export default Box4;
