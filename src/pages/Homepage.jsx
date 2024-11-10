import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Home</h1>
      <Link to="/app">Book a room now</Link>
    </div>
  )
}
