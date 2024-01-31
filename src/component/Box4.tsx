import EventCard from "./EventCard";
import iconCalendar from "../assets/calendar-todo-fill.svg";
import iconMapPin from "../assets/map.svg";
import iconShirt from "../assets/shirt.svg";
import MapDestination from "./MapDestination";
import ShadeTheme from "./ShadeTheme";

const detail1_1 = "วันเสาร์ที่ 6 เมษายน พ.ศ. 2567";
const detail1_2 = "เวลา 11:30 น. ฉลองมงคลสมรส";

const Box4 = () => {
  console.log(iconCalendar);
  return (
    <div className="min-h-[100vh] bg-secondary py-8 w-full">
      <div className="flex flex-col px-4">
        <div className="text-center tracking-wider mb-5 text-primary text-[30px] font-bold">
          EVENT ATTRACTIONS
        </div>
        <div className="flex flex-col items-center gap-4 sm:gap-0 sm:flex-row sm:items-start sm:justify-between">
          <EventCard
            icon={iconCalendar}
            event="WHEN"
            detail1={detail1_1}
            detail2={detail1_2}
            Element={
              <a
                target="_blank"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NzZqZ2d0OWxvY2kyOWx0M2hicGhpamJsY2QgdG95b2htMDAyNUBt&amp;tmsrc=toyohm0025%40gmail.com">
                <button className="border border-primary px-2 py-1 rounded-sm shadow-md text-primary">
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
                <button className="border border-primary px-2 py-1 rounded-sm shadow-md text-primary font-[600px]">
                  Get directions
                </button>
              </a>
            }
          />
          <EventCard
            icon={iconShirt}
            event="THEME"
            detail1={"#SP wedding"}
            detail2={""}
            Element={
              <div>
                <div className="flex justify-center mb-4">
                  <ShadeTheme />
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
