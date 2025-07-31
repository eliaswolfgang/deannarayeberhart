const upcomingEvents = [
  {
    role: <p>Rossweisse</p>,
    show: (
      <p>
        <i>Die Walküre</i> (Wagner)
      </p>
    ),
    company: <p>The Santa Fe Opera</p>,
    dates: <p>May 26 - August 24, 2025</p>,
    tickets: (
      <a
        href='https://www.santafeopera.org/whats-on/die-walkure-2025/?gad_source=1&gad_campaignid=21849534360&gbraid=0AAAAACyjBhMNSXw7MPgj4lEfRXgCtUNRS&gclid=Cj0KCQjwnJfEBhCzARIsAIMtfKIq_fa7gXxPSp1UA9wDdAOpHaDfl_DD8SxasXZiWQKxxfF_bIVGi2AaAjA5EALw_wcB'
        target='_blank'
        rel='noopener noreferrer'
      >
        Get Tickets
      </a>
    ),
  },
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
    role: <p>Chorus</p>,
    show: (
      <p>
        <i>Madame Butterfly</i> (Puccini)
      </p>
    ),
    company: <p>Lyric Opera of Kansas City</p>,
    dates: <p>November 14 - November 16, 2025</p>,
    tickets: (
      <a
        href='https://www.kcopera.org/performances/madame-butterfly/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Get Tickets
      </a>
    ),
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
              {event.tickets && <p className='card-text'>{event.tickets} </p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upcoming;
