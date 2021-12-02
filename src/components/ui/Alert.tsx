import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Alerts: React.FC<{
  variant: string;
  description: string;
}> = (props) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        variant={props.variant}
        onClose={() => setShow(false)}
        className="me-4"
        dismissible
      >
        {props.description}
      </Alert>
    );
  }
  return <></>;
};

export default Alerts;
