import Modal from "./Modal";
import { useState } from "react";

const Example = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <main>
      <h1>React Modal</h1>
      <Modal show={show} handleClose={hideModal}>
        <p>Modal</p>
      </Modal>
      <button type="button" onClick={showModal}>
        Open
      </button>
    </main>
  );
};

export default Example;
