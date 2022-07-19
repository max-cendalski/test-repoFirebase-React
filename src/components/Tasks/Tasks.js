import {getFirestore, getDocs, doc, setDoc, addDoc,collection, updateDoc} from "firebase/firestore"
import { useState, useEffect } from "react";
import {firestore} from '../Firebase/firebase'


const Tasks = () => {
  const [tasks, setTask] = useState([])
  const tasksDb = collection(firestore, 'tasks')

  useEffect(()  => {
    const getTasks = async() => {
      const tasksList = await getDocs(tasksDb)
      console.log('tasksList',tasksList)
    }
    getTasks()
  },[])

  return (
    <article>
      <h1>Tasks List</h1>
    </article>
  )
}

export default Tasks;



/*     function writeSingleTask() {
      const taskData = {
        title: 'Read',
        note: 'Lem',
      };
      setDoc(tasksDb, taskData, {merge: true})
    }
    writeSingleTask()
  }) */


/*    async function addNewTask() {
      console.log('whee2')
      const newTask = await addDoc(tasksDb, {
        title: 'Read',
        note: 'Lem',
      });
      console.log(`Your doc was created at ${newTask.path}`)
    }
    addNewTask() */
