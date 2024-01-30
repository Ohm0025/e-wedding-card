import EventCard from "./EventCard";
import iconCalendar from "../assets/calendar-todo-fill.svg";

type Props = {};

const detail1_1 = "วันอาทิตย์ที่ 8 พฤษภาคม พ.ศ. 2565";
const detail1_2 = "เวลา 11:09 น. ฉลองมงคลสมรส";

const Box4 = (props: Props) => {
  console.log(iconCalendar);
  return (
    <div className="min-h-[100vh] bg-[white] py-8">
      <div className="text-center tracking-wider mb-5">EVENT ATTRACTIONS</div>
      <div className="flex items-center justify-around">
        <EventCard
          icon={iconCalendar}
          event="WHEN"
          detail1={detail1_1}
          detail2={detail1_2}
          Element={<button>Add to calendar</button>}
        />
        <EventCard
          icon={iconCalendar}
          event="WHEN"
          detail1={detail1_1}
          detail2={detail1_2}
          Element={<button>Add to calendar</button>}
        />
        <EventCard
          icon={iconCalendar}
          event="WHEN"
          detail1={detail1_1}
          detail2={detail1_2}
          Element={<button>Add to calendar</button>}
        />
      </div>
    </div>
  );
};

export default Box4;
