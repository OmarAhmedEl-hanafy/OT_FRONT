import { Link } from "react-router-dom"

type props = {
    obj : {
        link:string,
        text:string,
    }
}

function ButtonMore({obj}:props) {
  return (
    <Link to={obj.link} className="btn btn-main btn-more w-[250px]" data-content ={obj.text}>
        {obj.text}
        <i className="fas fa-arrow-right ml-3 text-2xl animate-pulse"></i>
    </Link>
  )
}

export default ButtonMore