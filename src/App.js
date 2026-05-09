
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Addtodoform from "./components/Addtodoform";
import Addtodolist from "./components/Addtodolist";
import Todolist from "./components/Todolist";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";

function App(){

   const [myusers, setmyusers] = useState([
        {
            username: "VR",
            password: "123"
        },
        {
            username: "Vini",
            password: "1903"
        },
        {
            username: "Rithi",
            password: "1903"
        },
        {
            username: "Vinirithi",
            password: "1903"
        },



    ])
return(
 <div>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login myusers={myusers} setmyusers={setmyusers} /> }></Route>
        <Route path='/Signup' element={<Signup myusers={myusers} setmyusers={setmyusers} />}></Route>
        <Route path='/Landing' element={<Landing   />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
)
}

export default App
