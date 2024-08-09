import CardGridImage from "../components/CardGridImage"
import { ResourceListData } from "../data/ResourceListData"

function CardGridImageItems() {
  return (
    <>
        { ResourceListData.map((data) => {
            return (
                <>
                    <CardGridImage 
                        resourceTitle={data.resourceTitle}
                        resourceImage={data.resourceImage}
                        resourceLink={data.resourceLink}
                    />
                </>
            )
        })}
    </>

  )
}

export default CardGridImageItems
