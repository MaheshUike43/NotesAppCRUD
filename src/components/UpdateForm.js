import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateNote } from '../redux/Action/action'
import './UpdateForm.css'
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css'

export default function UpdateForm() {
  const path = useLocation()
  const userId = path.pathname.replace("/UpdateForm/", "")
  const user = useSelector((state) => state.notes[userId])


  let [title, setTitle] = useState(user.title)
  let [content, setContent] = useState(user.content)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(updateNote(userId, title, content))
    navigate('/AllNotes')
  }

  const showToastMessage = () => {
    if (user.title !== '' && user.content !== '') {
      toast.success('Note Update Successfully');
    }
    else {
      toast.warning('Enter Note Details');
    }
  };

  return (
    <div className='updateform container'>
      <h3 className='form-head'>Update Notes</h3>
      <div className='update-form'>
        <form action="" onSubmit={handleSubmit}>
          <label className='mb-2 fw-bold'>Title</label>
          <br />
          <input className='title' required type="text" name="title" value={title} placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} />
          <br />
          <label className='my-2 fw-bold'>Details</label>
          <br />
          <textarea className='content' required name="content" value={content} placeholder='Enter Details' onChange={(e) => setContent(e.target.value)}> </textarea>
          <br />
          <button type='submit' onClick={showToastMessage} className='btn btn-success'>Save</button>
          <br />
          <button className='btn btn-danger' onClick={() => navigate('/AllNotes')}>Cancel</button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}
