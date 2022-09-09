
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import ShowBook from './Features/Books/ShowBook';
import AddBook from './Features/Books/AddBook';
import './App.css';
import EditBook from './Features/Books/EditBook';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/show-book" element={<ShowBook/>}/>
        <Route path="/add-book" element={<AddBook/>}/>
        <Route path="/edit-book" element={<EditBook/>}/>
      </Routes>
    </div>
  );
}

export default App;
