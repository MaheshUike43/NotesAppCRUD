import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/Action/action'
import { useNavigate } from 'react-router-dom';
import './NoteForm.css'
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css'


export default function NotesForm() {

    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addNote(title, content));
        setTitle('');
        setContent('');

    }

    const showToastMessage = () => {
        if (title !== '' && content !== '') {
            toast.success('Note Added Successfully');
        }
        else {
            toast.warning('Enter Note Details');
        }
    };

    return (
        <div className='noteform container'>
            <h3 className='form-head'>Add Notes</h3>
            <div className='entry-form'>
                <form action="" onSubmit={handleSubmit}>
                    <label className='mb-2 fw-bold'>Title</label>
                    <br />
                    <input className='title' required type="text" name="title" value={title} placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <label className='my-2 fw-bold'>Details</label>
                    <br />
                    <textarea className='content' required name="content" value={content} placeholder='Enter Details' onChange={(e) => setContent(e.target.value)}> </textarea>
                    <br />
                    <button type='submit' onClick={showToastMessage} className='btn btn-warning'>Add Note</button>
                    <br />
                    <button className='btn btn-primary' onClick={() => navigate('/AllNotes')}>All Notes</button>
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





