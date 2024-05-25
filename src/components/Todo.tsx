import useTodoStore from "../app/todoStore";

const Todo = () => {
  const todoStore = useTodoStore();

  return (
    <div>
      <div>
        <input type="text" value={todoStore.newTodo}
          onChange={(e) => todoStore.setNewTodo(e.target.value)} />
        <button type="submit" onClick={() => todoStore.addTodo()}>Add Todo</button>
      </div>

      <div>
        {todoStore.todos.map((todo) => (
          <div key={todo.id}>
            <input type="checkbox" checked={todo.done}
              onChange={() => todoStore.toggle(todo.id)} />
            <input type="text" value={todo.text}
              onChange={(e) => todoStore.update(todo.id, e.target.value)} />
            <button onClick={() => todoStore.remove(todo.id)} type="button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todo;