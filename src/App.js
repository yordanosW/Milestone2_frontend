import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Food from './Components/Food';
import NewFood from './Components/NewFood';
import Home from './Components/Home';
import NewReview from './Components/NewReview';
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
            <Route path ='/food' element={<Food />}/>
            <Route path ='/food/new' element={<NewFood/>}/>
            <Route path ='/food/review' element={<NewReview/>} />
            <Route path = '/Grocery' element={<Grocery/>}/>
<<<<<<< HEAD
            <Route path = '/Login' element={<Login/>}/>
=======
            {/* <Route path = '/SignIn' element={<SignIn/>}/> */}
>>>>>>> d8786d1b8602754007f8499adbbd1aaba41fd4f3
          </Routes>
         </Router>
    </div>
  );
}

export default App;
