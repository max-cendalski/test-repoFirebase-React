import {getFirestore, collection, addDoc} from "firebase/firestore"
import { useState, useEffect } from "react";
import app from '../Firebase/firebase'

const Tasks = () => {
  const db = getFirestore(app)
  useEffect(()  => {
      console.log('whee1')

    const writeData = async () => {
      console.log('whe2')
      try {
        const docRef = await addDoc(collection(db, 'tasks'), {
        title: 'Read a book',
        comment: 'Probably Lem',
        dueTime: '7/29'
      });
      console.log("document created with ID", docRef.id);
    } catch (e) {
      console.error("Error while adding document", e)
    }
      }
    writeData()

  })


  return (
    <article>
      <h1>Tasks List</h1>
    </article>
  )
}

export default Tasks;
