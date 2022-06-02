import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="d-flex justify-content-center text-center">
      <div>
        <p>Copyright &copy; 2022</p>
        <Link
          to="/about"
          className="text-dark"
          style={{ textDecoration: "none" }}
        >
          About us
        </Link>
      </div>
    </div>
  );
};
