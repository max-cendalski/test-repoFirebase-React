import { getDatabase, ref, set, get, child,push, update } from "firebase/database"
import { UserAuth } from "../Firebase/context"
import { useState, useEffect } from "react"


const Todos = () => {
  const {user} = UserAuth()
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  useEffect(()=> {
    const db = ref(getDatabase());
    get(child(db, `users/${user.uid}`))
    .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
},[])

  const handleAddDataToDb = () => {
    const db = getDatabase()
      set(ref(db), {
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

  const handleAddTodo = () => {
    const todoData = {
                "title": "Learn Firebase",
                "status": true,
                "id": 211
              }

    const db = getDatabase()
    console.log('db',db)
    const newPostKey = push(child(ref(db), `todos/users/${user.uid}/todos`)).key
      console.log('newpostkey',newPostKey)

    const updates = {}
    updates[`/todos/users/${user.uid}/todos/${newPostKey}`] = todoData

    return update(ref(db), updates)
  }

  const handleTodoClick = (id,title) => {
    console.log('id:',id)
    console.log('title:',title)
  }


const handleGetTodos = () => {
  const dbRef = ref(getDatabase())
  get(child(dbRef, `todos/users/${user.uid}/todos`)).then((snapshot) => {
    if (snapshot.exists()) {
      setTodos(snapshot.val())
    } else {
      console.log("No data available");
    }
    }).catch((error) => {
      console.error(error);
    })
    console.log('todos',todos)
  }




  const handleDelete = (id) => {
    console.log("whee", id)
    const db = getDatabase()

  }

  const handleTodoChange = (e) => {
    setTodo(e.target.value)
  }

  return (
    <article className="todos-container">
      <h1>Todo List</h1>
       {todos &&
          Object.keys(todos).map((todo, index) => {
          return <article className="todos-container" key={index}>
                  <section
                  onClick={() =>{handleTodoClick(todo.id, todo.title)}}
                  className="todo-item"
                  >{todos[todo].title}
                  <p>key: {Object.hasOwn(todos)} </p>

                  </section>
                  <button onClick={()=> {handleDelete(Object.keys(todos)[1])}} >Delete</button>
                </article>
      })
      }

      <form className="todo-form">
        <p>
          <label htmlFor="">Todo</label>
          <input onChange={handleTodoChange}
           type="text"
           value={todo}
           ></input>
        </p>
      <button onClick={handleAddTodo}>Add Todo</button>
      </form>

      <button onClick={handleAddDataToDb}>ADD DATA TO DB</button>
      <button onClick={handleGetTodos}>Get todos from DB</button>
      <button onClick={handleDelete}>Delete Todo</button>
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
