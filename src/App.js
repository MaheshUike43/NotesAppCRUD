
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllNotes from './components/AllNotes';
import NotesForm from './components/NotesForm';
import UpdateForm from './components/UpdateForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NotesForm />} />
          <Route path='/AllNotes' element={<AllNotes />} />
          <Route path='/UpdateForm/:id' element={<UpdateForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
