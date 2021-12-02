import React from 'react';
import { Card } from 'react-bootstrap';
import User from '../../../models/User';

const SingleUser: React.FC<{ user: User }> = (props) => {
  return (
    <Card bg="light">
      <Card.Body>{props.user.name}</Card.Body>
    </Card>
  );
};
export default SingleUser;
