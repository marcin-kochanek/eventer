import React from 'react';

const EditEventPage = (props) => {
  console.log(props);
  return (
    <div>
      Editing the event with the id of {props.match.params.id}
    </div>
  );
};

export default EditEventPage;