import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./User";
import AddUser from "./AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userdetails/:id" element={<User />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
      );
}


export default App;
