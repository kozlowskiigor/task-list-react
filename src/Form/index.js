import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onInputChange = ({ target }) => setNewTaskContent(target.value)

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form
      className="form"
      onSubmit={onFormSubmit}
    >
      <input
        value={newTaskContent}
        onChange={onInputChange}
        className="form__input"
        placeholder="Jakie zadanie masz do zrobienia?"
        required
      />
      <button
        className="button"
      >
        Dodaj zadanie
      </button>
    </form>
  );
};

export default Form;