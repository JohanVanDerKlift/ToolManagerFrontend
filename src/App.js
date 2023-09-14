import './App.scss';
import {Route, Routes} from "react-router-dom";
import Tools from "./pages/tools/tools";
import AddTool from "./pages/addTool/AddTool";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="main">
      <Navbar/>
      <div className="container">
        <div className="menuContainer">
          <Menu/>
        </div>
        <div className="contentContainer">
          <Routes>
            <Route path='/tools' element={<Tools/>}/>
            <Route path='/add_tool' element={<AddTool/>}/>
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
