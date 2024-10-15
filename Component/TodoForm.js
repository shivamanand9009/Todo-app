import { useState } from "react";

const TodoForm = ({onAddTodo}) =>{
  const [inputValue,setInputValue] = useState({});


  const handleChange = (value) =>{
    setInputValue({id: value, content: value, checked: false});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id: "", content: "", checked: ""});
  };

  return (
    <section className = "form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input 
            type="text" 
            className="todo-input" 
            autoComplete="off"
            placeholder="Enter Your Task" 
            value={inputValue.content}
            onChange={(event) => handleChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Todo
            </button>
          </div>
        </form>
      </section>
  );
};

export default TodoForm;