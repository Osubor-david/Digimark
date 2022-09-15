import Home from "./routes/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./routes/Contact";
import Service from "./routes/Service";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/service' element={<Service/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
