import React from 'react'
import Slider from '../components/Slider'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Jumbotron from '../components/Jumbotron'

export default function Home() {
  return (
    <>
      <Slider />
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src='https://i.pinimg.com/564x/4f/c6/69/4fc669ff44221bea3761cdeaaa4468a9.jpg'></Card.Img>
              <Card.Body>
                <Card.Title>WebDeb Blog</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consecteteriam non et corrupti impedit cupiditate illo vitae?
                </Card.Text>
                <Button variant='primary'>Lear more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src='https://i.pinimg.com/564x/4f/c6/69/4fc669ff44221bea3761cdeaaa4468a9.jpg'></Card.Img>
              <Card.Body>
                <Card.Title>WebDeb Blog</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consecteteriam non et corrupti impedit cupiditate illo vitae?
                </Card.Text>
                <Button variant='primary'>Lear more</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src='https://i.pinimg.com/564x/4f/c6/69/4fc669ff44221bea3761cdeaaa4468a9.jpg'></Card.Img>
              <Card.Body>
                <Card.Title>WebDeb Blog</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consecteteriam non et corrupti impedit cupiditate illo vitae?
                </Card.Text>
                <Button variant='primary'>Lear more</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Jumbotron />
      <Container style={{ paddingTop: '5rem', paddingBottom: '3rem'}}>
        <Row>
          <Col md={6}>
            <img src="https://i.pinimg.com/564x/4f/c6/69/4fc669ff44221bea3761cdeaaa4468a9.jpg" alt="img" />
          </Col>
          <Col md={5}>
            <h2>WebDev Blog</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, deleniti eos illum, nobis praesentium maxime tempora quisquam magni quos corporis minima! Odit suscipit modi est, amet quisquam tempora reprehenderit explicabo!
              Molestias, officiis! Dolorum vitae reprehenderit accusantium optio mollitia at nam nostrum iusto aliquid dolore, animi quo blanditiis perspiciatis eos voluptate omnis ducimus impedit aperiam? Fuga sit eaque sed. Similique, laudantium.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
