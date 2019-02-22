import React, { Component } from 'react'
import './Inventory.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class Inventory extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid col-10 col-sm-8 inventoryBody">
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
