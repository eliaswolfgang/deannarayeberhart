import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';

import { validateEmail } from '../../utils/helpers.js';

function Contact() {
  const [formState, setFormState] = useState({
    from_name: '',
    reply_to: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { from_name, reply_to, message } = formState;
  const SERVICE_ID = 'service_deanna_ray_mezzo';
  const TEMPLATE_ID = 'template_8cjthkc';

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
    if (!errorMessage) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, {
        publicKey: 'vDvgS5b65FSmKdgtz',
      });
      setFormState({ from_name: '', reply_to: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'reply_to') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.dataset.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <Container style={{ backgroundColor: '#F0E8D5', marginBottom: '7.5rem' }}>
      <Row className='mt-5'>
        <Col xs={12}>
          <Form style={{width: '100%'}} onSubmit={handleSubmit}>
            <Form.Label className='mt-3'>Name</Form.Label>
            <Form.Control
              type='text'
              name='from_name'
              data-name='Name'
              value={from_name}
              onChange={handleChange}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              name='reply_to'
              data-name='Email'
              value={reply_to}
              onChange={handleChange}
            />
            <Form.Label>Message</Form.Label>
            <Form.Control
              type='text'
              as='textarea'
              rows={6}
              name='message'
              data-name='Message'
              value={message}
              onChange={handleChange}
            />
            {errorMessage && (
              <div>
                <p className='text-danger'>{errorMessage}</p>
              </div>
            )}
            <Button
              className='my-2'
              style={{ backgroundColor: 'white', color: 'black' }}
              type='submit'
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
