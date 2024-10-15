import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({
  data,
  checked, 
  onHandleDelete, 
  onHandleCheck,
}) => {
  return (
    <>
              <li className="todo-item">
                <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
                <button 
                className="check-btn" 
                onClick={() => onHandleCheck(data)}>
                  <MdCheck/>
                </button>
                <button 
                className="delete-btn"
                onClick={() => onHandleDelete(data)}>
                  <MdDeleteForever/>
                </button>
              </li>
    </>
  );
};

export default TodoList;