type taskPropsType = {
  taskName: string;
  id: number;
  isLoggedIn: boolean;
};

const Task = (props: taskPropsType) => {
  return (
    <div>
      <h1>TypeScript Practice</h1>
      <h3 style={{ color: props.isLoggedIn ? "red" : "blue" }}>
        {props.id} {props.taskName}
      </h3>
    </div>
  );
};

export default Task;
