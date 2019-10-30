import React from 'react';
import {Button, CardDeck, Card} from 'react-bootstrap';
import './style.css'

const cardStyle = {
        color: '#525252',
    }

class MyCard extends React.Component {

    render() {
        return (

            <CardDeck>
            <Card className="example text-center">
              <Card.Img variant="top" src="park.jpeg" />
              <Card.Body>
                <Card.Title style={cardStyle}>Attraction</Card.Title>
                <Card.Text>
                  Rating
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                   <Button variant="primary">favorite</Button>
                <small className="text-muted">  Price</small>
              </Card.Footer>
            </Card>
            <Card className="text-center">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Attraction</Card.Title>
                <Card.Text>
                  Rating{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                  <Button variant="primary">favorite</Button>
                <small className="text-muted">  Price</small>
              </Card.Footer>
            </Card>
            <Card className="text-center">
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Attraction</Card.Title>
                <Card.Text>
                  Rating
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                   <Button variant="primary">favorite</Button>
                <small className="text-muted">  Price</small>
              </Card.Footer>
            </Card>
          </CardDeck>




        ) 
    }
}

export default MyCard;