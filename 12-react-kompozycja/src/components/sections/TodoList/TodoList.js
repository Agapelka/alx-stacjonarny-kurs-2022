import Button from "../../atoms/Button/Button";


function TodoList(props) {
    return (
    
      <ul>
        {
          props.todoFromPage.map(todo => {
            return (
              <li key={todo.id}>
                {todo.text}
                <Button 
                    text="Remove"
                    onClickAction= {() => props.hadleRemoveTodoFromPage(todo.id)}
                />
              </li>
            )
          })
        }
      </ul>
    
    )
}
export default TodoList;