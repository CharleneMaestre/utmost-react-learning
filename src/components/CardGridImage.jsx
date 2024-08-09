import { Link } from "react-router-dom"
import { ResourceListData } from "../data/ResourceListData"

function CardGridImage({resourceImage, resourceLink, resourceTitle}) {
  return (
    <>  
        <div className="row-start-2 w-[375px] author-resources-list ps-[36px] pe-[36px]">
            <div>
                <Link to={resourceLink}>
                    <img src={resourceImage} className="author-resources-img mb-6"/>
                </Link>
                <h3>
                    <Link to={resourceLink} className="text-2xl uppercase text-black">{resourceTitle}</Link>
                </h3>
            </div>
        </div>
    </>
  )
}

export default CardGridImage
