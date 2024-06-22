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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  password1: string;
  extraError?: string;
}

function ToDoList() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@gmail.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError("password1", { message: "Password are not the same."}, { shouldFocus: true })
    }
    setError("extraError", { message: "Server offline." });
  };
  console.log(errors);

  return (
    <>
      <form 
        style={{display: "flex", flexDirection: "column" }} 
        onSubmit={handleSubmit(onValid)}
      >
        <input 
          {...register("email", { 
            required: "Email is required.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@gmail.com$/,
              message: "Only gmail.com emails allowed",
            },
          })} 
          placeholder="Email" 
        />
        <span>{errors?.email?.message as string}</span> 
        <input {...register("firstName", { 
            required: "First name is required.",
            validate: (value) => !value.includes("admin") ? "admin is not allowed to use" : true,
          })}
          placeholder="First Name" 
        />
        <span>{errors?.firstName?.message as string}</span> 
        <input {...register("lastName", { 
            required: "Last name is required." 
          })}
          placeholder="Last Name" 
        />
        <span>{errors?.lastName?.message as string}</span> 
        <input {...register("userName", { 
            required: "User name is required.", 
            minLength: 5,
           })}
          placeholder="Username"
        />
        <span>{errors?.userName?.message as string}</span> 
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
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </>
  );
}

export default ToDoList;