import NavBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/noteState';
import  Alert  from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';


const App = () => {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <div>
      <>
        <NoteState>
          <Router>
            <NavBar />
            <Alert alert={alert} />
            <div>
              <Routes>
                <Route exact path="/" element={<Home showAlert={showAlert} />} />
                <Route exact path="/about" element={<About />} />
                {/* ---------------Login------------------ */}
                <Route exact path="/login" element={<Login showAlert={showAlert} />} />
                {/* -----------------Signup--------------- */}
                <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />


              </Routes>
            </div>
          </Router>
        </NoteState>
      </>
    </div >
  );

}
export default App