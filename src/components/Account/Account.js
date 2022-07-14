import React from 'react'
import { UserAuth } from '../Firebase/context';
import { useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';

import Todos from '../Todos/Todos'
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';
//import Loading from '../Loading/Loading';

const Account = ({uid}) => {
   const {user, logout} = UserAuth()
   //const [imagesList, setImagesList] = useState([])
   const [image, setImage] = useState('')
   const [imageUpload, setImageUpload] = useState(null)
   const navigate = useNavigate()

   const storage = getStorage()
   const geImg = ref(storage,`users/${user.uid}`)

    useEffect(() => {
      getDownloadURL(ref(storage, `users/${user.uid}`))
          .then((url) => {
          setImage(url)
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `users/${user.uid}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(ref(storage, geImg))
      .then((url) => {
        setImage(url)
      });
    });
  };

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/signin')
      console.log('You are logged out')
    } catch(e) {
      console.log(e.message)
    }
  }
  //if (image.length === 0) return  (<Loading />)
  return (
    <article className='account-container'>
      <h1>Account</h1>
      <p>User Email: {user && user.email}</p>
      <section ></section>
      <img className="image-container" src={image} alt="George"></img>
      <button onClick={handleLogout}>Logout</button>
      <hr />
      <section>

      <input
        type="file"
        onChange={(event) => {
          console.log('event.target',event.target.files[0])
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload my Image</button>


      </section>
      <Todos />
  </article>
  )
}

export default Account;

// RENDERING LIST OF ALL IMAGES
/*     useEffect(()=> {

      listAll(imagesRef)
      .then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url)=> {
            setImagesList((prev) => [...prev,url])
          })
        })
      })
    },[])
 */


    // UPLOADO WITH RENDER


/*   const uploadFile = () => {
    if (imageUpload == null) return;
   const newFilesList = ref(storage, 'newfiles/')

    const imageRef = ref(storage, `${newFilesList}/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
       getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
      console.log('wheeee')
    });
  }; */


 /*     console.log('uid',uid)
      getDownloadURL(ref(storage, `users/${uid}`))
      .then((url) => {
        console.log('url',url)
        setImage(url)
      }) */
