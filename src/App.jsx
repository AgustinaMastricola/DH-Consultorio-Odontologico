
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { rutes } from './Components/utils/rutes'


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path={rutes.home} element={<Home/>}/>
            <Route path={rutes.detail} element={<Detail/>}/>
            <Route path={rutes.favs} element={<Favs/>}/>
            <Route path={rutes.contact} element={<Contact/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
