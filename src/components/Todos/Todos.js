import { getDatabase, ref, set, get, child,push, update } from "firebase/database"
import { UserAuth } from "../Firebase/context"
import { useState } from "react"


const Todos = () => {
  const {user} = UserAuth()
  const [todos, setTodos] = useState(null)

  const handleAddTodo = () => {
    const db = getDatabase()
      set(ref(db, 'todos'), {
        "users": {
          "RKkMoEEsn5ZL0rueUrWsPIT2e912": {
            "name": "max",
            "email": "test@gmail.com",
            "todos": {
            },
          },
            "XL9zTWPFxkbP0gyArmw8yIVfi0j1": {
            "name": "arek",
            "email": "olb@gmail.com"
          },
        }
      }
    )
  }


  const handleTodoClick = (id,title) => {
    console.log('id:',id)
    console.log('title:',title)
  }
  const handleDeleteTodo = (id) => {
    console.log('whee')
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

  const handleUpdateTodo = () => {
    const todoData = {
                "title": "Play Video",
                "status": true,
                "id": 235
              }

    const db = getDatabase()
    console.log('db',db)
    const newPostKey = push(child(ref(db), `todos/users/${user.uid}/todos`)).key
      console.log('newpostkey',newPostKey)

    const updates = {}
    updates[`/todos/users/${user.uid}/todos/${newPostKey}`] = todoData

    return update(ref(db), updates)
  }

  return (

    <article className="todos-container">
      <h1>Todo List</h1>
       {todos &&
          todos.map((todo, index) => {
          return <article className="todos-container" key={todo.id}>
                   <section
                    onClick={() =>{handleTodoClick(todo.id, todo.title)}}
                    className="todo-item" >{todo.title}
                   </section>
                   <button onClick={handleDeleteTodo} >Delete</button>
                  </article>

      })
      }

      <button onClick={handleAddTodo}>Add to DB</button>
      <button onClick={handleGetTodos}>Get todos from DB</button>
      <button onClick={handleUpdateTodo}>UpdateTodo</button>
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
