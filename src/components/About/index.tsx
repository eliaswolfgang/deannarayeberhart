import { Col, Row } from 'react-bootstrap';
import full_headshot from '../../assets/opera_headshot_full.png';
import opera_headshot2 from '../../assets/opera_headshot2.jpg';

function About() {
  return (
    <div style={{ backgroundColor: '#F0E8D5'}}>
      <div>
        <img
          src={full_headshot}
          alt='Deanna Ray Eberhart Headshot'
          className='img-fluid'
          style={{ width: '100vw' }}
        />
      </div>
      <Row className='mt-4'>
        <Col xs={6}>
          <img
            src={opera_headshot2}
            alt='Deanna Ray Eberhart Headshot'
            className='img-fluid'
            style={{ width: '100%' }}
            id='opera-headshot-2'
          />
        </Col>
        <Col xs={12} md={6}  className='mt-2 text-justify opera-bio'>
        <div className='mr-4'>
          <p className='text-black fw-bold'>
            Young mezzo-soprano Deanna Ray Eberhart is a highly versatile
            musician from Kansas City, Missouri with a “warm and indulgent
            presence” onstage (KC Studio) and “considerable élan” (S. Fairbank).
          </p>
          <p className='text-black'>
            In the summer of 2025, Deanna made her debut as Rossweisse in the
            company premiere of Wagner’s <i>Die Walküre</i> at The Santa Fe
            Opera, where she was a first-year apprentice singer. While at Santa
            Fe, Deanna also covered the role of Countess Ceprano in{' '}
            <i>Rigoletto</i> and appeared in the chorus of <i>La bohème</i>.
          </p>
          <p className='text-black'>
            Prior to her work with Santa Fe, Deanna appeared with the Lyric
            Opera of Kansas City as Gertrude in <i>Romeo et Juliette</i> and
            Flosshilde in <i>Journey to Valhalla</i>, a compendium of Wagner’s
            Ring Cycle compiled by conductor Michael Christie.
          </p>
          <p className='text-black'>
            In 2024, Deanna graduated with a double MM degree in Voice
            Performance and Church Music (Choral Conducting) from the University
            of Kansas. During her vocal study there, she worked with legendary
            mezzo-soprano Joyce Castle. There, she performed as Little Buttercup
            in <i>H.M.S. Pinafore</i> and as La Zia Principessa in{' '}
            <i>Suor Angelica</i> before being hired as an Apprentice Artist with
            the Lyric Opera of Kansas City, where she performed in the choruses
            of <i>Carmen</i>, <i>La traviata</i>,
            <i>Amahl and the Night Visitors</i>, <i>Cavalleria Rusticana</i>,{' '}
            <i>Pagliacci</i>, and
            <i>The Sound of Music</i>. Deanna also appears as a chorister on the
            GRAMMY® nominated recording of <i>The Shining</i> by Mark Campbell
            and Paul Moravec, performed and recorded by the Lyric Opera of
            Kansas City in 2023 before its release on Pentatone in 2024.
          </p>
          <p className='text-black'>
            Deanna is also a graduate of the University of Northern Iowa school
            of music, where she attained a Bachelor of Arts in Music. Under the
            tutelage of technician Dr. Jean McDonald and coach Dr. Korey
            Barrett, Deanna performed the role of Arsamene in Handel’s{' '}
            <i>Serse</i>, as well as scenes from <i>La Cenerentola</i>{' '}
            (Angelina), <i>Béatrice et Bénédict</i> (Béatrice),{' '}
            <i>La Clemenza di Tito</i> (Sesto), and{' '}
            <i>The Merry Wives of Windsor</i> (Meg Page).
          </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;
