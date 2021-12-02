import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import AppContext from '../../../store/appContext';
import SingleUser from '../SingleUser/SingleUser';

const OutputSingleRow: React.FC<{ users: number[] }> = (props) => {
  const appCtx = useContext(AppContext);
  return (
    <ListGroup.Item className="d-flex flex-column flex-md-row">
      {props.users.map((userindex, i) => {
        const user = appCtx.users[userindex];
        return (
          <React.Fragment key={userindex}>
            {i !== 0 && (
              <>
                <span className="d-none d-md-flex align-items-center">
                  &nbsp;&#x2192;&nbsp;
                </span>
                <span className="d-flex d-md-none align-items-center align-self-center">
                  &nbsp;&#x2193;&nbsp;
                </span>
              </>
            )}
            <SingleUser user={user} />
          </React.Fragment>
        );
      })}
    </ListGroup.Item>
  );
};

export default OutputSingleRow;
