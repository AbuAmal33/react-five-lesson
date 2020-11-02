import {useState} from "react";

function App() {

    const [todos, setTodos] = useState([
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
    ]);

    const deleteTodo = (indexOfRemovedItem) => {
        const filtered = todos.filter((todo, index) => {
            if (index === indexOfRemovedItem) {
               return false;
            } return true;
        });
        setTodos(filtered)
    }

    const newTodos = todos.map((todo, index) => {

        return (
            <div className={`todo ${todo.favorite ? 'selected' : ''}`}>
                <div className="favorite">
                    <span><i className="fa fa-star" aria-hidden="true"> </i></span>
                </div>
                <div className="todo-text">
                    {todo.text}
                </div>
                <div className="actions">
                    <button onClick={() => deleteTodo(index)}><i className="fa fa-times" aria-hidden="true"> </i></button>
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
