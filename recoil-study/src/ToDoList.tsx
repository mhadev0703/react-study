import { useRecoilValue } from "recoil";
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";
import { toDoSelector } from "./atoms";

function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </>
  );
} 

export default ToDoList; 