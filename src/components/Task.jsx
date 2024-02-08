// src/components/Task.js


const Task = ({ task, onDelete, onToggle }) => {
  const { id, text, priority, completed } = task;

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <span>{text}</span>
      </div>
      <div>
        <span className={`priority ${priority}`}>{priority}</span>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
