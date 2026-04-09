import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import AddCar from "./pages/addCar/AddCar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="add-car" element={<AddCar />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
