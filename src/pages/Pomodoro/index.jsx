import React, { useState } from 'react'
import { Timer } from '../../components'
import TimerContext from '../../contexts'
import { SessionForm } from '../../components'
import Modal from 'react-modal'

const Pomodoro = () => {
  const [workMinutes, setWorkMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5)

  const [modalIsOpen, setIsOpen] = useState(false)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },

  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
    <TimerContext.Provider value ={{
      workMinutes,
      setWorkMinutes,
      breakMinutes,
      setBreakMinutes
    }}>
      <Timer />
    </TimerContext.Provider>

    <button onClick={openModal}>Open Session Form</button>
      <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
      contentLabel="session form"
      >
        <SessionForm openModal={openModal} closeModal={closeModal}/>
      </Modal>
    </>
  )
}

export default Pomodoro