import { getDatabase, ref, set, get, child } from "firebase/database"
import { UserAuth } from "../Firebase/context"
import { useState } from "react"


const Todos = () => {
  const {user} = UserAuth()
  console.log('userfromtodos',user.email)
  const [todos, setTodos] = useState({})

  const handleAddTodo = (title) => {
    const db = getDatabase()
      set(ref(db, 'todos'), {
        "todos": {
          "one": {
            "title": "Historical Tech Pioneers",
            "status": true,
          },
          "two": {
            "title": "Learn TypeScript",
            "status": true,
          },
          "three": {
            "title": "Learn Firebase",
            "status": true
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
      console.log('todos',todos)
    } else {
      console.log("No data available");
    }
    }).catch((error) => {
      console.error(error);
    })
  }

  return (
    <article className="todos-container">
      <h1>Todo List</h1>
      { todos &&
          Object.keys(todos).map((obj, index) => {
          return <div key={index}>{todos[obj].title}</div>
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
