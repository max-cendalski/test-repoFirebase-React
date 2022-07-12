import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { UserAuth } from '../Firebase/context';
import Todos from '../Todos/Todos'
import { getStorage, ref, getDownloadURL, listAll, list } from 'firebase/storage';

const Account = () => {
   const {user, logout} = UserAuth()
   const [imagesList, setImagesList] = useState([])

   const navigate = useNavigate()


   const storage = getStorage()
   const imagesRef = ref(storage, 'images/')

useEffect(()=> {
  listAll(imagesRef)
  .then((response) => {
    response.items.forEach((item) => {
      getDownloadURL(item).then((url)=> {
        setImagesList((prev) => [...prev,url])
      })
    })
  })
},[])


  const handleLogout = async () => {
    try {
      await logout()
      navigate('/signin')
      console.log('You are logged out')
    } catch(e) {
      console.log(e.message)
    }
  }

  return (
    <article className='account-container'>
      <h1>Account</h1>
      <p>User Email: {user && user.email}</p>
      <img className="image-container" src={imagesList[1]} alt="George"></img>
      <button onClick={handleLogout}>Logout</button>
      <hr />
      <Todos />
  </article>
  )
}

export default Account;
