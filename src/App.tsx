import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout/>}>
          <Route path="ai" />
          <Route path="cars" />
          <Route path="car/:id" />
          <Route path="bookings"/>
          <Route path="ai"/>
        </Route> 
      </Routes>
    </>
  );
}
export default App;
