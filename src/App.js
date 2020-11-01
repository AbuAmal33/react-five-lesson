
function App() {
    const todos = [
        {
            text: "Купить барана",
            favorite: false,
        },
        {
            text: "Продать козла",
            favorite: true,
        },
        {
            text: "Выучить React",
            favorite: false,
        }
    ];

    const newTodos = todos.map((todo) => {
        let todoClass;

        if (todo.favorite === true) {
            todoClass = "todo selected";
        } else {
            todoClass = "todo";
        }

        return (
            <div className={todoClass}>
                <div className="favorite">
                    <span><i className="fa fa-star" aria-hidden="true"> </i></span>
                </div>
                <div className="todo-text">
                    {todo.text}
                </div>
                <div className="actions">
                    <span><i className="fa fa-times" aria-hidden="true"> </i></span>
                </div>
            </div>
        )
    });

  return (
    <div className="app">
      <div className="header">
        <h1>Список дел</h1>
      </div>
      <div className="form">
        <input placeholder="Введите текст..." type="text"/>
        <button>Добавить</button>
      </div>
      <div className="todos">
          {newTodos}
      </div>
    </div>
  );
}

export default App;
