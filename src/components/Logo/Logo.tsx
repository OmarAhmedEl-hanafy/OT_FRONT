import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Logo({height}:{height:number}) {
  return (
    <div>
      <Link to="/" style={{height:`${height}px`}} className={`text-white block max-w-max`}>
        <img src={logo} alt="RS" />
      </Link>
    </div>
  );
}

export default Logo;
