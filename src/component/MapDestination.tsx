const MapDestination = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.3387235837927!2d101.005124!3d13.576105499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d39cf418cfc55%3A0x8c988e805e9f323b!2zQWJvdXQgWW91IOC4quC4luC4suC4meC4l-C4teC5iOC4iOC4seC4lOC4h-C4suC4meC5geC4leC5iOC4h-C5geC4peC4sOC4m-C4o-C4sOC4iuC4uOC4oQ!5e0!3m2!1sth!2sth!4v1706564977970!5m2!1sth!2sth"
      className="w-full"
      height="450"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  );
};

export default MapDestination;
