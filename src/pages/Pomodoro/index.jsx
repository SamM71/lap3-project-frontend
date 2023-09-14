import React, { useEffect, useState } from 'react'
import { Timer } from '../../components'
import TimerContext from '../../contexts'
import { SessionForm, Redirect } from '../../components'
import Modal from 'react-modal'
import { updateNav } from '../../scripts'

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

  useEffect(() => {
    updateNav()
  }, [])

  return (
    <>
      <Redirect />
      <TimerContext.Provider value ={{
        workMinutes,
        setWorkMinutes,
        breakMinutes,
        setBreakMinutes
      }}>
        <Timer openModal={openModal} closeModal={closeModal}/>
      </TimerContext.Provider>

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
