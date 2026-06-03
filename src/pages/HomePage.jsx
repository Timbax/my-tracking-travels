import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>World Wise</h1>

      <Link to="/pricing">Pricing</Link>
    </div>
  );
}
