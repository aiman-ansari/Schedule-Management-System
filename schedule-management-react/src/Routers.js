import { Route, Routes } from "react-router-dom";
import Users from "./Component/AllUsers/Users";
import Home from "./Component/Home/Home";
export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/all-users' element={<Users />}></Route>
    </Routes>
  );
};
