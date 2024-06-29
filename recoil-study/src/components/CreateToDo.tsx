import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDo = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({toDo}: IForm) => {
    // ... makes setToDo returns value inside of the array
    setToDo(oldToDo => [{ text: toDo, id: Date.now() ,category: "TO_DO" }, ...oldToDo]);
    // To make form empty after user clicks submit
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
        <input 
          {...register("toDo", {
            required: "Please fill in a To Do.",
          })} 
          placeholder="Write a to do" 
        />
        <button>Add</button>
      </form>
  );
}

export default CreateToDo;