import React, { Component } from 'react'
import './Shopping.css';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

export default class Shopping extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid col-10 col-sm-8 shoppingBody">
          <ListGroup>
            <ListGroupItem>
              Lorem, ipsum.
            </ListGroupItem>
            <ListGroupItem>
              Lorem, ipsum.
            </ListGroupItem>
            <ListGroupItem>
              Lorem, ipsum.
            </ListGroupItem>
            <ListGroupItem>
              Lorem, ipsum.
            </ListGroupItem>
            <ListGroupItem>
              Lorem, ipsum.
            </ListGroupItem>
            <ListGroupItem>
              Lorem, ipsum.
            </ListGroupItem>
            <ListGroupItem>
              Lorem, ipsum.
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    )
  }
}
