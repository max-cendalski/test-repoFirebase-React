import { getDatabase, ref, set, get, child } from "firebase/database"
import { UserAuth } from "../Firebase/context"
import { useState } from "react"


const Todos = () => {
  const {user} = UserAuth()
  const [todos, setTodos] = useState(null)

  const handleAddTodo = () => {
    const db = getDatabase()
      set(ref(db, 'todos'), {
        "todos": {
          1: {
            "title": "Play Video Games",
            "status": true,
            "id": 235
          },
          2: {
            "title": "Learn TypeScript",
            "status": true,
            "id": 222
          },
          3: {
            "title": "Learn Firebase",
            "status": true,
            "id": 120
          },
        },
        "users": {
          "RKkMoEEsn5ZL0rueUrWsPIT2e912": {
            "name": "max",
            "email": "test@gmail.com",
            "todos": {
              1: {
                "title": "Play Video Games",
                "status": true,
                "id": 235
              },
              2: {
                "title": "Learn TypeScript",
                "status": true,
                "id": 222
              },
              3: {
                "title": "Learn Firebase",
                "status": true,
                "id": 120
              },
            },
          },
            2: {
            "name": "arek",
            "email": "olb@gmail.com"
          },
        }
      }
    )
  }


  const handleTodoClick = (id) => {
    console.log('id',id)
  }

const handleGetTodos = () => {
  const dbRef = ref(getDatabase())
  get(child(dbRef, `todos/users/${user.uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log('snapshot',snapshot.val())
      setTodos(snapshot.val().todos)
    } else {
      console.log("No data available");
    }
    }).catch((error) => {
      console.error(error);
    })
      if(todos) {
        console.log('todos.email',todos)
      }
  }

  return (

    <article className="todos-container">
      <h1>Todo List</h1>
       {todos &&
          todos.map((todo, index) => {
          return <section onClick={() =>{handleTodoClick(todo.id)}} className="todo-item" key={todo.id}>{todo.title}</section>
      })
      }

      <button onClick={handleAddTodo}>Add to DB</button>
      <button onClick={handleGetTodos}>Get todos from DB</button>
    </article>
  )
}

export default Todos

/*     {todos &&
          Object.keys(todos).map((obj, index) => {
          return <section className="todo-item" key={todos[obj].id}>{todos[obj].title}</section>
      })
 */
// An index to track Ada's memberships
/* {
  "users": {
    "alovelace": {
      "name": "Ada Lovelace",
      // Index Ada's groups in her profile
      "groups": {
         // the value here doesn't matter, just that the key exists
         "techpioneers": true,
         "womentechmakers": true
      }
    },
    ...
  },
  "groups": {
    "techpioneers": {
      "name": "Historical Tech Pioneers",
      "members": {
        "alovelace": true,
        "ghopper": true,
        "eclarke": true
      }
    },
    ...
  }
} */
/*
 {todos &&
          todos.todos.map((obj, index) => {
          return <section className="todo-item" key={todos[obj].id}>{todos[obj].title}</section>
      })
      } */
