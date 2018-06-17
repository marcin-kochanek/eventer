import React from 'react';
import Modal from 'react-modal';

const TaskModal = (props) => (
  <Modal
    isOpen={!!props.chosenTask}
    onRequestClose={props.handleCloseModal}
    contentLabel="Chosen Task"
  >
    <h3>Chosen Task</h3>
    {props.chosenTask && <p>{props.chosenTask}</p>}
    <button onClick={props.handleCloseModal}>Okay, thanks!</button>
  </Modal>
);

export default TaskModal;