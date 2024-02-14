import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Food from './Components/Food';
import NewFood from './Components/NewFood';
import Home from './Components/Home';
import Grocery from './Components/Grocery';
import SignIn from './Components/SignIn';
//Home, New, FoodPage

function App() {
  return (
    <div>
         <Router>
          <Navbar />
          <Routes>
            <Route path ='/' element={<Home />}/>
            <Route path ='/food/:id' element={<Food />}/>
            <Route path ='/food/new' element={<NewFood/>}/>
            <Route path = '/Grocery' element={<Grocery/>}/>
            <Route path = '/SignIn' element={<SignIn/>}/>
          </Routes>
         </Router>
    </div>
  );
}

export default App;
