import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Rooms from "./pages/Rooms";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import "./index.css"

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/app" element={<AppLayout />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
  
}
