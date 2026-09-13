import { Col, Row } from 'react-bootstrap';
import full_headshot from '../../assets/opera_headshot_full.png';
import opera_headshot2 from '../../assets/opera_headshot2.jpg';

function About() {
  return (
    <div style={{ backgroundColor: '#F0E8D5' }}>
      <div>
        <img
          src={full_headshot}
          alt='Deanna Ray Eberhart Headshot'
          className='img-fluid'
          style={{ width: '100%' }}
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
        <Col xs={12} md={6} className='mt-2 text-justify opera-bio'>
          <div className='mr-4'>
            <p className='text-black fw-bold'>
              Lauded for her “luminous, warmly enveloping sound” (Opera Today)
              and “concentrated intensity” onstage (Musical America), Kansas
              City-born mezzo-soprano Deanna Ray Eberhart is a highly versatile
              musician with “considerable élan” (S. Fairbank). For the 2026-27
              season, Deanna joins the International Opernstudio of the
              Staatsoper Stuttgart in Germany, where she will appear as Annina
              in <i>La Traviata</i>, Tisbe in <i>La Cenerentola,</i> and Mary in{' '}
              <i>Der fliegende Holländer</i>.
            </p>
            <p className='text-black'>
              Quickly rising as a sought-after performer of dramatic repertoire,
              Deanna made her debut as Rossweisse in <i>Die Walküre</i> at the
              Santa Fe Opera--a company premiere--in the summer of 2025 as a
              first-year Apprentice Artist. She returned to Santa Fe for her
              second-year apprenticeship in 2026 to perform as the Second Lady
              in an inventive new staging of <i>The Magic Flute</i>, and also
              sang the role of Dagmar in the North American premiere of{' '}
              <i>Lili Elbe</i> by Tobias Picker and Aryeh Stollman. As Dagmar,
              Deanna received widespread acclaim for her “vividly portrayed”
              (Dallas Morning News) and “sharp-edged” (Parterre) performance.
            </p>
            <p className='text-black'>
              Prior to her work with Santa Fe, Deanna appeared with the Lyric
              Opera of Kansas City as Gertrude in <i>Roméo et Juliette</i> and
              Flosshilde in <i>Journey to Valhalla</i>, a compendium of Wagner’s
              Ring Cycle compiled by conductor Michael Christie.
            </p>
            <p className='text-black'>
              Deanna was an Apprentice Artist with the Lyric Opera of Kansas
              City from 2022-2024. There, she performed as Gertrude in{' '}
              <i> Roméo et Juliette</i> and Flosshilde in{' '}
              <i>Journey to Valhalla</i>, a compendium of Wagner’s Ring Cycle
              created by American conductor Michael Christie. She also sang as a
              chorister in eight other LOKC productions during herntraining
              there, including the GRAMMY nominated recording of{' '}
              <i>The Shining</i> by Mark Campbell and Paul Moravec conducted by
              Gerard Schwarz, based on the best-selling novel by Stephen King.
            </p>
            <p className='text-black'>
              In 2026, Deanna was the winner of the Kansas City District of the
              Metropolitan Opera Laffont Competition, a semi-finalist for the
              Houston Grand Opera Eleanor McCollum Competition, and a finalist
              for the Dallas Opera Competition. She holds a double MM degree in
              Voice Performance and Church Music from the University of Kansas
              and a Bachelor of Arts in Music from the University of Northern
              Iowa. She has studied with Dr. Jean McDonald, Joyce Castle, and
              Nova Thomas. Other role credits include La Zia Principessa in
              Puccini's <i>Suor Angelica</i>, Little Buttercup in Gilbert and
              Sullivan's <i>H.M.S. Pinafore</i>, Alidora in a gender-bent production of
              Rossini's <i>La Cenerentola</i>, and Arsamene in Händel's <i>Serse</i>.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default About;
