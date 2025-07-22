import { Link } from "react-router-dom";
import logo from "../../assets/images/OT/OT_Logo.png";

function Logo() {
  return (
    <div>
      <Link
        to="/"
        style={{ height: "80px" }}
        className={`text-white block max-w-max`}
      >
        <img src={logo} alt="OT" />
      </Link>
    </div>
  );
}

export default Logo;
