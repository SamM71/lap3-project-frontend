import React, { useState } from "react";
import "./index.css";

const SessionForm = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mood, setMood] = useState("");
  const [message, setMessage] = useState("");
  const [isActive, setIsActive] = useState("");
  const [moodEmoji, setMoodEmoji] = useState("");

  function veryGoodMood(e) {
    setMood("Very Good");
    setMoodEmoji("😀");
    setIsActive(e.target.id);
  }

  function goodMood(e) {
    setMood("Good");
    setMoodEmoji("😊");
    setIsActive(e.target.id);
  }

  function badMood(e) {
    setMood("Bad");
    setMoodEmoji("😌");
    setIsActive(e.target.id);
  }

  function veryBadMood(e) {
    setMood("Very Bad");
    setMoodEmoji("😒");
    setIsActive(e.target.id);
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleDesc(e) {
    setDesc(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title.length > 0 && desc.length > 0 && mood.length > 0) {
      const token = localStorage.getItem("token");

      fetch("https://mongo-juice-api.onrender.com/tasks", {
        method: "POST",
        body: JSON.stringify({
          name: title,
          description: desc,
          mood: moodEmoji,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMessage("Sessions added successfully.");
          setTimeout(() => {
            setMessage("");
            props.closeModal();
          }, 1500);
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
          setMessage("There was a problem in logging your session");
          setTimeout(() => {
            setMessage("");
            props.closeModal();
          }, 1500);
        });
      setTitle("");
      setDesc("");
    } else {
      setMessage("Please enter session details");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  }

  return (
    <form id="session-form">
      <h1>Add to your Activity Log</h1>
      <div className="form-input">
        <label htmlFor="title">Title of session: </label>
        <input
          name="title"
          type="text"
          placeholder="e.g. Maths homework"
          value={title}
          onChange={handleTitle}
          className="text-box"
        />
      </div>

      <div className="form-input">
        <label htmlFor="desc">Description:</label>
        <textarea
          name="desc"
          value={desc}
          id="desc"
          cols="30"
          rows="6"
          onChange={handleDesc}
        ></textarea>
      </div>
      <p>How do you feel that session went?</p>
      <div className="mood-form">
        <span onClick={veryBadMood}>
          <p
            id="veryBadMood"
            style={{
              borderColor: isActive === "veryBadMood" ? "white" : "transparent",
            }}
          >
            &#128530;
          </p>
        </span>
        <span onClick={badMood}>
          <p
            id="badMood"
            style={{
              borderColor: isActive === "badMood" ? "white" : "transparent",
            }}
          >
            &#128533;
          </p>
        </span>
        <span onClick={goodMood}>
          <p
            id="goodMood"
            style={{
              borderColor: isActive === "goodMood" ? "white" : "transparent",
            }}
          >
            &#128522;
          </p>
        </span>
        <span onClick={veryGoodMood}>
          <p
            id="veryGoodMood"
            style={{
              borderColor:
                isActive === "veryGoodMood" ? "white" : "transparent",
            }}
          >
            &#128512;
          </p>
        </span>
      </div>
      <p>{mood}</p>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Add session
        </button>
        <button onClick={() => props.closeModal()}>Cancel</button>
      </div>

      <p>{message}</p>
    </form>
  );
};

export default SessionForm;
