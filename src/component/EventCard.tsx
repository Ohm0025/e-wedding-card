type Props = {
  icon: string;
  event: string;
  detail1: string;
  detail2: string;
  Element: JSX.Element;
};

const EventCard = ({ icon, event, detail1, detail2, Element }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div>
        <img src={icon} className="block" alt="icon-event" />
      </div>
      <div className="text-primary">
        <div className="text-center my-3 tracking-wide font-extrabold sm:text-[26px]">
          {event}
        </div>
        <div className="flex flex-col items-center my-3 tracking-wide">
          <span className="text-center sm:text-[22px]">{detail1}</span>
          <span className="text-center sm:text-[22px]">{detail2}</span>
        </div>
      </div>
      <div>{Element}</div>
    </div>
  );
};

export default EventCard;
