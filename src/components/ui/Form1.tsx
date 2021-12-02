import React, { useState } from 'react';
import { Button,InputGroup,FormControl } from 'react-bootstrap';
import './form1.css'

const Form1: React.FC<{
  id: string;
  title: string;
  onSubmitHandler: (event: React.FormEvent) => void;
  userRef: React.Ref<HTMLInputElement>;
  placeholder: string;
  btnText: string;
}> = (props) => {
  const [name, setName] = useState('');
  return (
    <div className="form1container" id={props.id}>
      <div className="header">
        <h1 className="title">{props.title}</h1>
      </div>

      <hr className="formHR" />
      
      <div className="formBody1">
        <form className="form1"
          onSubmit={(e: React.FormEvent) => {
            props.onSubmitHandler(e);
            setName('');
          }}
        >

          <InputGroup size="lg">
            <FormControl
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              type="text"
              placeholder={props.placeholder}
              ref={props.userRef}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </InputGroup>
          <div style={{height:"20px"}}></div>

          <Button size="lg"className="form1btn" variant="primary" type="submit" disabled={name === ''}>
            {props.btnText}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form1;
