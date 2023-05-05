import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNote } from '../redux/Action/action'
import { useNavigate } from 'react-router-dom';
import './AllNotes.css'
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css'

export default function AllNotes() {
  const notes = useSelector((state) => state.notes)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const showToastMessage = () => {
    toast.error('Note Deleted Successfully')
  };

  return (
    <div className='all-notes container-lg container-md container-sm'>
      <div className='d-flex py-5'>
        <h3 className='w-75'>All Saved Notes</h3>
        <button className='btn btn-warning m-0 w-25' onClick={() => navigate('/')}>Home</button>
      </div>
      <div className='row'>
        {
          notes.map((note, index) => {
            return (
              <div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
                <div className='card'>
                  <h5 className='card-header bg-warning'>{note.title}</h5>
                  <div className='card-body bg-dark'>
                    <h5 className='card-title text-warning'>Details</h5>
                    <p className='card-text text-light'>{note.content}</p>
                  </div>
                  <div className='card-footer'>
                    <button className='btn btn-warning' onClick={() => navigate(`/UpdateForm/${index}`)}>Update</button>
                    <button className='btn btn-danger mb-3'
                      onClick={() => { dispatch(removeNote(index)); showToastMessage(); }}>Delete</button>
                  </div>
                </div>
              </div>
            )
          })
        }
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
