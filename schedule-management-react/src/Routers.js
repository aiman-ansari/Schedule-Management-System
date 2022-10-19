import { Route, Routes } from "react-router-dom";
import Users from "./Component/AllUsers/Users";
import Home from "./Component/Home/Home";
import AddRoom from "./Component/Rooms/AddRoom";
import Rooms from "./Pages/Rooms/Rooms";
export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/all-users' element={<Users />}></Route>
      <Route path='/rooms' element={<Rooms />}></Route>
    </Routes>
  );
};
