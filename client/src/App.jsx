import Register from "./pages/Register";
import Login from "./pages/Login";
import Analyze from "./pages/Analyse";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import StartupDetails from "./pages/startupDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/NavBar";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

    
  <Navbar />

<Routes>
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path ="/analyze" element= {<ProtectedRoute><Analyze /></ProtectedRoute>} />
        <Route
          path="/startup/:id"
          element={
            <ProtectedRoute>
              <StartupDetails />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );

}
export default App;