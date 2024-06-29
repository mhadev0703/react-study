import { useRecoilValue } from "recoil";
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";
import { toDoState } from "./atoms";

function ToDoList() {
  const toDo = useRecoilValue(toDoState);

  console.log(toDo);

  return (
    <>
      <h1>To Do</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </>
  );
} 

export default ToDoList; 