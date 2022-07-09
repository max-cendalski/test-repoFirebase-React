import { getDatabase, ref, set, get, child,push, update, remove } from "firebase/database"
import { UserAuth } from "../Firebase/context"
import { useState, useEffect } from "react"
import Loading from "../Loading/Loading"
import Modal from "../Modal/Modal"


const Todos = () => {
  const {user} = UserAuth()
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [todoItem, setTodoItem] = useState('todo-item')
  const [todoForm, setTodoFormClass] = useState('todo-form')
  const [modal, setModal] = useState('display-modal')
  const [todosContainer, setTodosContainer] = useState('todos-container')
  const [titleToEdit, setTitleToEdit] = useState('')
  const [idToEdit, setIdToEdit] = useState('')

  useEffect(()=> {
    const db = ref(getDatabase());
    get(child(db, `users/${user.uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      setTodos(snapshot.val().todos)
    } else {
      console.log("No data available");
    }
    }).catch((error) => {
      console.error(error);
    });
  })

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

  const handleAddTodo = (e) => {
    e.preventDefault()
    const db = getDatabase()

    const newTodoKey = push(child(ref(db), `users/${user.uid}/todos`)).key
      console.log('newTodokey',newTodoKey)

    const todoData = {
        "title": todo,
        "id": newTodoKey
    }

    const updates = {}
    updates[`/users/${user.uid}/todos/${newTodoKey}`] = todoData
    setTodo('')
    return update(ref(db), updates)
  }

const handleGetTodos = () => {
  const dbRef = ref(getDatabase())
  get(child(dbRef, `/users/${user.uid}/todos`)).then((snapshot) => {
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


  const handleDeleteTodo = (id) => {
    console.log('id',id)
    const dbRef = ref(getDatabase())
    remove(child(dbRef, `/users/${user.uid}/todos/${id}`))
  }

  const handleEditTodo = (id,title) => {
    const db = getDatabase()
    console.log('id',id)
    console.log('titleTOEdit',titleToEdit)
    setModal('display-modal-clicked')
    setTodosContainer('invisible')
    setTitleToEdit(title)
    setIdToEdit(id)
  /*   set(ref(db, `/users/${user.uid}/todos/${id}/title`),
      (todoData)
    ) */
  }

  const handleCancelModal = () => {
    setModal('display-modal')
    setTodosContainer('todos-container')
  }

  const handleTodoChange = e => {
    setTodo(e.target.value)
  }

  const handleEditInputChange = e => {
    setTitleToEdit(e.target.value)
  }

  const handleSubmitEdit = e => {
    e.preventDefault()
    const db = getDatabase()

    console.log('maybe')
    console.log('id,titlToEdit',idToEdit,titleToEdit)
    set(ref(db, `/users/${user.uid}/todos/${idToEdit}/title`),
    (titleToEdit))
    setModal('display-modal')
    setTodosContainer('todos-container')
  }

  if (todos.length == 0 ) return (<Loading />)
  return (
    <article className="todos-container">
        <form className={todoForm}>
        <p>
          <label htmlFor="">Todo</label>
          <input onChange={handleTodoChange}
           type="text"
           value={todo}
           ></input>
        </p>
        <button onClick={handleAddTodo}>Add Todo</button>
      </form>
      <h1>Todo List</h1>
       {todos &&
          Object.keys(todos).map((todo, index) => {
          return <article className={todosContainer} key={index}>
                  <section
                    className={todoItem}
                    >{todos[todo].title}
                    <button onClick={()=> {handleEditTodo(todos[todo].id, todos[todo].title)}} >Edit</button>
                    <button onClick={()=> {handleDeleteTodo(todos[todo].id)}} >Delete</button>
                  </section>
                </article>
          })
        }
        <Modal modal={modal}
               handleCancelModal={handleCancelModal}
               handleEditInputChange={handleEditInputChange}
               handleSubmitEdit={handleSubmitEdit}
               title={titleToEdit}

        />
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


/*        <button onClick={handleAddDataToDb}>ADD DATA TO DB</button>
      <button onClick={handleGetTodos}>Get todos from DB</button> */
