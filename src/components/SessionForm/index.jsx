import React, { useState } from 'react'
import './index.css'

const SessionForm = (closeModal) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [mood, setMood] = useState('')
  const [message, setMessage] = useState('')

  function veryGoodMood() {
    setMood("Very Good")
  }

  function goodMood() {
    setMood("Good")
  }

  function badMood() {
    setMood("Very Good")
  }

  function VeryBadMood() {
    setMood("Very Bad")
  }

  function handleTitle(e) {
    setTitle(e.target.value)
  }
  function handleDesc(e) {
    setDesc(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (title.length > 0 && desc.length > 0 && mood.length > 0) {
      fetch('http://localhost:8080/tasks', {
        method: 'POST',
        body: JSON.stringify({name: title, description: desc, mood: mood}),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((res) => res.json())
      .then((data) => {
        setMessage('Sessions added successfully.');
        setTimeout(() => {
          setMessage('')
        }, 5000)
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message);
        setMessage('There was a problem in logging your session');
        setTimeout(() => {
          setMessage('')
        }, 5000)
      });
      setTitle('');
      setDesc('');
    } else {
      setMessage('Please enter session details');
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }

  return (
    <form id='session-form'>
      <h1>Add to your Activity Log</h1>
      <div className="form-input">
        <label htmlFor="title">Title of session: </label>
        <input
        name='title'
        type="text"
        placeholder='e.g. Maths homework'
        value={title}
        onChange={handleTitle}
        className='text-box' />
      </div>
      
      <div className="form-input">
      <label htmlFor="desc">Description:</label>
        <textarea 
        name="desc" 
        value={desc}
        id="desc" 
        cols="30" 
        rows="6"
        onChange={handleDesc}></textarea>
      </div>
      <p>How do you feel that session went?</p>
      <div className="mood-form">
        <span
        onClick={VeryBadMood}>
          <p>&#128530;</p>
        </span>
        <span
        onClick={badMood}>
          <p>&#128533;</p>
        </span>
        <span
        onClick={goodMood}>
          <p>&#128522;</p>
        </span>
        <span
        onClick={veryGoodMood}>
          <p>&#128512;</p>
        </span>
      </div>
      <div>
        <button
        type='submit'
        onClick={handleSubmit}
        >Add session</button>
        <button
          onClick={() => closeModal()}
          >Cancel</button>
      </div>
      
      <p>{message}</p>
    </form>
  )
}

export default SessionForm
