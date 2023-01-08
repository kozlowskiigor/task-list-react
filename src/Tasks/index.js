import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        className={`list__item${task.done && hideDone ? " list__item--hidden" : ""}`}
        key={task.id}>
        <button
          className="list__button list__button--done">
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`list__item--margined ${task.done ? "list__item--done" : ""}`}>
          {task.content}
        </span>
        <button
          className="list__button list__button--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;