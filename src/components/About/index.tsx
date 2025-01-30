import { Col, Container, Image, Row } from 'react-bootstrap';
import opera_headshot2 from '../../assets/opera_headshot2.jpg';

function About() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col xs={4}>
          <Image fluid src={opera_headshot2} thumbnail />
        </Col>
        <Col xs={8}>
          <p>
            Deanna Ray Eberhart is a mezzo-soprano and
            singer-songwriter from Kansas City, Missouri.
          </p>
          <p>
            With the collection of poetry <i>Awakening</i>, Deanna became a
            published author at age eleven. Her love of words quickly evolved
            into a penchant for songwriting, leading to the creation of her
            debut album,{' '}<i>Summerland</i>, released when she was fifteen. Shortly after{' '}
            <i>Summerland</i>’s release, Deanna began studying classical voice
            with the pianist and organist Paul Erickson.
          </p>
          <p>
            For undergraduate study, Deanna attended the University of Northern
            Iowa to study with Dr. Jean McDonald. She then attained a double
            Master of Music degree at the University of Kansas in Church Music
            (Choral Conducting) and Voice Performance, studying with Dr. Michael
            Bauer and the legendary mezzo-soprano Joyce Castle. During her time
            at KU, Deanna worked as an Apprentice Artist for the Lyric Opera of
            Kansas City, singing as a chorister in the 2022-23 season. During
            the 2023-24 season, she made her professional debut in two named
            roles as Gertrude in Gounod’s <i>Romeo et Juliette</i> and
            Flosshilde in <i>Journey to Valhalla</i>, a compendium of Wagner’s
            Ring Cycle. She will sing the role of Rossweisse in the Santa Fe
            Opera’s production of <i>Die Walküre</i> in their 2025 summer
            festival season.
          </p>
          <p>
            During her classical study, Deanna continued writing songs. In
            January of 2024, she recorded her sophomore album, <i>Green</i>,
            with producer Matthew Clinkenbeard at Glass House Studio in
            Nashville, TN. <i>Green</i>’s songs showcase Deanna’s prowess as a
            writer, and highlight her versatility both as a vocalist and
            guitarist. A single from the album, titled “Cloverlooking,” was
            released on St. Patrick’s Day 2024. The entire album was released to
            all streaming services on October 25, 2024. Additional work is
            forthcoming.
          </p>
          <p>
            When not making noise, Deanna enjoys tending to her garden, trying
            gourmet food and drink from local restaurants, and spending time
            with her husband, Ian Von Fange, and their two cats, Nashi and Ted.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
