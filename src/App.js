import Navba from './components/Navbar';
import Footer from './components/footer';
import Home from './components/Home';
import Diving from './components/Diving';
import Ticket from './components/Ticket'
import TicketReservation from './components/TicketReservation';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
<Router>
<Navba/>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/Diving' element={<Diving />}></Route>
    <Route path='/TicketReservation' element={<TicketReservation />}></Route>
    <Route path='/Ticket' element={<Ticket />}></Route>
     {/* <Route path='/Home' element={<Home />}></Route> */}
    {/* <Route path='/Read' element={<Read />}></Route>
    <Route path='/GitCrud' element={<GitCrud />}></Route>
    <Route path='/Updata' element={<Updata />}></Route>  */}
    </Routes>
  
    <Footer></Footer>

  </Router>

 
    </div>
  );
}

export default App;
