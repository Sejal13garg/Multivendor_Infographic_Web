import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import { ToastContainer, toast } from "react-toastify";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/User/Dashboard";
import Vendordashboard from "./pages/Vendor/Vendordashboard";
import Admindashboard from "./pages/Admin/Admindashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vendordashboard" element={<Vendordashboard />} />
        <Route path="/admindashboard" element={<Admindashboard />} />
      </Routes>
    </>
  );
}

export default App;
