import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
};

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function ToDoList() {
  const [toDo, setToDo] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({toDo}: IForm) => {
    // ... makes setToDo returns value inside of the array
    setToDo(oldToDo => [{ text: toDo, id: Date.now() ,category: "TO_DO" }, ...oldToDo]);
    // To make form empty after user clicks submit
    setValue("toDo", "");
  };

  console.log(toDo);

  return (
    <>
      <h1>To Do</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input 
          {...register("toDo", {
            required: "Please fill in a To Do.",
          })} 
          placeholder="Write a to do" 
        />
        <button>Add</button>
      </form>
      <ul>
        {toDo.map(toDo =>
          <li key={toDo.id}>{toDo.text}</li>
        )}
      </ul>
    </>
  );
} 

export default ToDoList;