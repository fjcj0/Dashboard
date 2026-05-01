import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import { useEffect } from "react";
import { protectServer } from "./utils/protection.utils";
function App() {
    useEffect(() => {
    const init = async () => {
      await protectServer();
    };
    init();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardPage/>}/>
          <Route path="cars" />
          <Route path="car/:id" />
          <Route path="bookings"/>
          <Route path="users"/>
        </Route> 
      </Routes>
    </>
  );
}
export default App;