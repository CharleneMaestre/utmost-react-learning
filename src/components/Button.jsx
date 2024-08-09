import { Link } from "react-router-dom"

function Button({className, title, btnLink}) {
  return (
    <div className="text-center btn">
        <Link className={`${className} font-proximaNova`} to={btnLink}>{title}</Link>
    </div>
  )
}

export default Button
