import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

export const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onInputChange = ({ target }) => setNewTaskContent(target.value)

  const onFormSubmit = (event) => {
    event.preventDefault();

    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        onChange={onInputChange}
        ref={inputRef}
        placeholder="Jakie zadanie masz do zrobienia?"
        required
      />
      <Button>
        Dodaj zadanie
      </Button>
    </StyledForm>
  );
};