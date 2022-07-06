import { getDatabase, ref, set, get, child } from "firebase/database"
import { UserAuth } from "../Firebase/context"
import { useState } from "react"


const Todos = () => {
  const {user} = UserAuth()
  console.log('userfromtodos',user.email)
  const [todos, setTodos] = useState({})

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
          "one": {
            "name": "max",
            "email": "test@gmail.com"
          },
            "two": {
            "name": "arek",
            "email": "olb@gmail.com"
          },
        }
      }
    )
  }
const handleGetTodos = () => {
  console.log('wheee')
  const dbRef = ref(getDatabase())
  get(child(dbRef, 'todos/todos')).then((snapshot) => {
    if (snapshot.exists()) {
      setTodos(snapshot.val())
    } else {
      console.log("No data available");
    }
    }).catch((error) => {
      console.error(error);
    })
      console.log('todoss',todos)
  }

  return (
    <article className="todos-container">
      <h1>Todo List</h1>
      {todos &&
          Object.keys(todos).map((obj, index) => {
          return <section className="todo-item" key={todos[obj].id}>{todos[obj].title}</section>
      })


      }
      <button onClick={handleAddTodo}>Add to DB</button>
      <button onClick={handleGetTodos}>Get todos from DB</button>
    </article>
  )
}

export default Todos



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
