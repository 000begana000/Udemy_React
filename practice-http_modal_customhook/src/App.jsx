import { useState } from "react";

import Modal from "./components/UI/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Modal open={isModalOpen} onClose={handleCloseModal} />
      <button onClick={handleOpenModal}>Open Modal</button>
    </>
  );
}

export default App;
