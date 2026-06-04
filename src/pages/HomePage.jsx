import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import AppNav from "../components/AppNav";

export default function HomePage() {
  return (
    <div>
      <Nav />
      <AppNav />
      <h1 className="test">World Wise</h1>

      <Link to="/app">Go to the App</Link>
    </div>
  );
}
