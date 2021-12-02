import React, { useContext, useRef } from 'react';
import AppContext from '../../../store/appContext';
import Form2 from '../../ui/Form2';

const AddRelationship: React.FC = (props) => {
  const appCtx = useContext(AppContext);
  const user1Ref = useRef<HTMLParagraphElement>(null);
  const user2Ref = useRef<HTMLParagraphElement>(null);
  const options = appCtx.users.map((user) => ({
    value: user.name,
    label: user.name,
  }));

  const newRelationshipEntryHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      !user1Ref.current ||
      !user2Ref.current ||
      !user1Ref.current.textContent ||
      !user2Ref.current.textContent
    )
      return;
    appCtx.onNewRelationshipEntry(
      user1Ref.current.textContent,
      user2Ref.current.textContent
    );
  };

  return (
    <Form2
      id="relationship"
      title="Set Relationship"
      onSubmitHandler={newRelationshipEntryHandler}
      user1Ref={user1Ref}
      user1Placeholder="Person 1"
      user2Ref={user2Ref}
      user2Placeholder="Person 2"
      btnText="Set"
      hasReadonlyInput={true}
      options={options}
    />
  );
};

export default AddRelationship;
