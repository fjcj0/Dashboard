import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout/>}>
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
