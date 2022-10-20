import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import AddRoom from "./Component/Rooms/AddRoom";
import Meeting from "./Pages/Meeting/Meeting";
import Rooms from "./Pages/Rooms/Rooms";
import User from "./Pages/Users/User";
export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/users' element={<User />}></Route>
      <Route path='/rooms' element={<Rooms />}></Route>
      <Route path='/meeting' element={<Meeting />}></Route>
    </Routes>
  );
};
