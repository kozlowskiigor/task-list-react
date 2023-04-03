import React, { useState } from "react";
import { TasksForm, Input, Button } from "./styled";

export const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onInputChange = ({ target }) => setNewTaskContent(target.value)

  const onFormSubmit = (event) => {
    event.preventDefault();

    addNewTask(newTaskContent.trim());

    setNewTaskContent("");
  };

  return (
    <TasksForm
      onSubmit={onFormSubmit}
    >
      <Input
        value={newTaskContent}
        onChange={onInputChange}
        placeholder="Jakie zadanie masz do zrobienia?"
        required
      />
      <Button>
        Dodaj zadanie
      </Button>
    </TasksForm>
  );
};