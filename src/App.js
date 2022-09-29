import logo from './logo.svg';
import './App.css';
import ManageStudents from './Components/ManageStudents/ManageStudents';
import AddStudents from './Components/AddStudents/AddStudents';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Students from './Components/Students';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Students></Students>}>
          <Route index element={<ManageStudents></ManageStudents>}></Route>

          <Route path='add' element={<AddStudents></AddStudents>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
