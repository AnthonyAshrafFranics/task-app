import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to="/" className="text-dark" style={{ textDecoration: "none" }}>
        Go Back
      </Link>
    </div>
  );
};
