import React from 'react';
import Modal from 'react-modal';

const TaskModal = (props) => (
  <Modal
    isOpen={!!props.chosenTask}
    onRequestClose={props.handleCloseModal}
    contentLabel="Chosen Task"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Do it now</h3>
    {props.chosenTask && <p className="modal__body">{props.chosenTask}</p>}
    <button className="button button--close" onClick={props.handleCloseModal}>I'm getting to work!</button>
  </Modal>
);

export default TaskModal;