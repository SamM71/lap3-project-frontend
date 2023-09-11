import React, { useState } from 'react'
import Modal from 'react-modal'
import "@lottiefiles/lottie-player";
import { Animations, SessionForm } from '../../components'

Modal.setAppElement('#root')

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {

  // }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Animations />
      <button onClick={openModal}>Open Session Form</button>
      <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="session form"
      >
        <SessionForm />
        <button
        onClick={closeModal}
        >Dont Add Session</button>
      </Modal>
    </>
  )
}

export default Home
