import Button from "../../atoms/Button/Button"

function TodoForm(props) {
    return (
      <form onSubmit={props.handleSubmit}>
        <label>
          Task Name
          <input
            type="text"
            value={props.taskNameInput}
            onChange={props.handleTaskNameChange}
          />
        </label>
        <Button
            text="Send"
            type="submit"        
        />
        {/* <button type="submit">Send</button> */}
      </form>
    )
  }
  
  export default TodoForm