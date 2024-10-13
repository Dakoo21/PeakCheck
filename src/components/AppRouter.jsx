import { Route, Routes } from "react-router-dom";
import JanghwanHome from "../pages/Janghwan/JanghawnHome";
import SeulgiHome from "../pages/Seulgi/SeulgiHome";
import SuyeonHome from "../pages/Suyeon/SuyeonHome";
import YoonjungHome from "../pages/Yoonjung/YoonjungHome";
import Home from "../pages/common/Home";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home />}></Route>
      <Route path="/janghwan" exact={true} element={<JanghwanHome />}></Route>
      <Route path="/seulgi" exact={true} element={<SeulgiHome />}></Route>
      <Route path="/suyeon" exact={true} element={<SuyeonHome />}></Route>
      <Route path="/yoonjung" exact={true} element={<YoonjungHome />}></Route>
    </Routes>
  );
};
export default AppRouter;
