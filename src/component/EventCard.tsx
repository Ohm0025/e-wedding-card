type Props = {
  icon: string;
  event: string;
  detail1: string;
  detail2: string;
  Element: JSX.Element;
};

const EventCard = ({ icon, event, detail1, detail2, Element }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={icon} className="block" alt="icon-event" />
      </div>
      <div className="">
        <div className="text-center my-3">{event}</div>
        <div className="flex flex-col items-center my-3">
          <span>{detail1}</span>
          <span>{detail2}</span>
        </div>
      </div>
      <div>{Element}</div>
    </div>
  );
};

export default EventCard;
