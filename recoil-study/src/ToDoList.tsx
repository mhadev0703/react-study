import { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
    console.log("submit");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </>
  );
} */

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <>
      <form 
        style={{display: "flex", flexDirection: "column" }} 
        onSubmit={handleSubmit(onValid)}
      >
        <input 
          {...register("email", { required: true })} 
          placeholder="Email" 
        /> 
        <input {...register("firstName", { required: true })}
          placeholder="First Name" 
        />
        <input {...register("lastName", { required: true })}
          placeholder="Last Name" 
        />
        <input {...register("username", { required: true, minLength: 5 })}
          placeholder="Username"
        />
        <input {...register("password", { 
            required: "Password is required.",
            minLength: {
              value: 10,
              message: "Your password is too short."
            },
          })}
          placeholder="Password" 
        />
        <input {...register("password1", { 
            required: "Check your password.", 
            minLength: {
              value: 10,
              message: "Your password is too short."
            }, 
          })}
          placeholder="Confirm PassWord" 
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default ToDoList;