import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { UserAuth } from '../Firebase/context';
import Todos from '../Todos/Todos'
import { getStorage, ref, getDownloadURL, listAll, list, uploadBytes } from 'firebase/storage';
import Loading from '../Loading/Loading';

const Account = () => {
   const {user, logout} = UserAuth()
   const [imagesList, setImagesList] = useState([])
   const [image, setImage] = useState('')
  const  [imageUpload, setImageUpload] = useState(null)


   const fileInputRef = React.createRef()

   const navigate = useNavigate()

   const storage = getStorage()
   const imagesRef = ref(storage, 'newfiles/'+ fileInputRef)

   const geImg = ref(storage,'images/George11.jpg')


   const newImgRef = ref(storage, 'newfiles')

    useEffect(()=> {
      getDownloadURL(ref(storage, geImg))
      .then((url) => {
        console.log('url',url)
        setImage(url)
      })
    },[])

  const handleFileUpload = e => {
    //e.preventDefault()
    const formData = new FormData();
    formData.append('testImage',fileInputRef);
    console.log('fileInputRef',fileInputRef)
    if (fileInputRef.current.files.length === 0) {
      console.log('whehe')
    } else {
        uploadBytes(imagesRef, formData)
        .then((snapshot) => {
      console.log('Uploaded a file!')
    })

      console.log('bingo')
    }


  }



  const handleLogout = async () => {
    try {
      await logout()
      navigate('/signin')
      console.log('You are logged out')
    } catch(e) {
      console.log(e.message)
    }
  }
  if (image.length === 0) return  (<Loading />)
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
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>


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
