const upcomingEvents = [
  {
    role: <p>Mezzo Soloist</p>,
    show: (
      <p>
        <i>Lord Nelson Mass</i> (Haydn)
      </p>
    ),
    company: <p>St. Joseph Community Chorus</p>,
    dates: <p>October 12, 2025</p>,
  },
  {
    role: <p>Soloist</p>,
    show: (
      <p>
        <i>Selections from Schlichte Weisen, Op. 76</i>  (Max Reger)
      </p>
    ),
    company: <p>Benedictine College Orchestra</p>,
    dates: <p>November 23rd, 2025</p>,
  },
];
function Upcoming() {
  return (
    <div>
      <h1 className='text-center my-4'>Upcoming</h1>
      <div className='flex flex-col justify-center align-items-center'>
        {upcomingEvents.map((event, index) => (
          <div className='card shadow-lg my-3 upcoming-card' key={index}>
            <div className='card-body'>
              <h5 className='card-title'>{event.role}</h5>
              <span className='card-text'>{event.show}</span>
              <span className='card-text'>{event.company}</span>
              <span className='card-text'>{event.dates}</span>
              {/* {event.tickets && <p className='card-text'>{event.tickets} </p>} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upcoming;
