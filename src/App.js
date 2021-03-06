import {useState} from "react";
import {text} from "@fortawesome/fontawesome-svg-core";
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos"

function App() {

    const [todos, setTodos] = useState([
        {
            text: "Купить барана",
            favorite: false,
        },
        {
            text: "Продать козла",
            favorite: false,
        },
        {
            text: "Выучить React",
            favorite: false,
        }
    ]);

    const [text, setText] = useState ("");

    const deleteTodo = (indexOfRemovedItem) => {
        const filtered = todos.filter((todo, index) => {
            if (index === indexOfRemovedItem) {
               return false;
            } return true;
        });
        setTodos(filtered)
    }

    const makeFavorite = (i) => {
        const newTodos = todos.map((item, index) => {
            if (i === index) {
                return {
                    ...item,
                    favorite: !item.favorite,
                }
            } else
                return item;
        });
        setTodos(newTodos)
    }

    const addTodo = () => {
        setTodos([ {
            text: text,
            favorite: false,
        },
        ...todos
        ]);
        setText("");
    }

  return (
    <div className="app">
      <Header />
      <Form text={text} setText={setText} addTodo={addTodo} />
      <Todos todos={todos} makeFavorite={makeFavorite} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
