import React, { Component } from 'react'
import './Trash.css';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

export default class Trash extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid col-10 col-sm-8 trashBody">
					<h3>My Trash:</h3>
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
