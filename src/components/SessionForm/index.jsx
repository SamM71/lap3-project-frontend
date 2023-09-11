import React, { useState } from 'react'

const SessionForm = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [message, setMessage] = useState('')
  const [timestamp, setTimestamp] = useState('')

  function handleTitle(e) {
    setTitle(e.target.value)
  }
  function handleDesc(e) {
    setDesc(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTimestamp(Date());
    if (title.length > 0 && desc.length > 0) {
      fetch('https://localhost:4000/tasks', {
        method: 'POST',
        body: JSON.stringify({name: title, description: desc, completed_at: timestamp}),
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
      setTimestamp('');
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
      <div>
        <label htmlFor="title">Title of session:</label>
        <input
        name='title'
        type="text"
        placeholder='e.g. Maths homework'
        value={title}
        onChange={handleTitle} />
      </div>
      <div>
        <label htmlFor="desc">Describe your session:</label>
        <textarea 
        name="desc" 
        value={desc}
        id="desc" 
        cols="30" 
        rows="10"
        onChange={handleDesc}></textarea>
      </div>
      <button
      type='submit'
      onClick={handleSubmit}
      >Add session</button>
      <p>{message}</p>
    </form>
  )
}

export default SessionForm
