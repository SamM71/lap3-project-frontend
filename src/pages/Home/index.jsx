import React, { useState } from 'react'
import Modal from 'react-modal'
import "@lottiefiles/lottie-player";
import { Animations, SessionForm } from '../../components'

Modal.setAppElement('#root')

const customStyles = {
  content: {
    alignText: 'center',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px'
  }
}

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
      style={customStyles}
      >
        <SessionForm openModal={openModal} closeModal={closeModal}/>
      </Modal>
    </>
  )
}

export default Home
