import Button from "./Button"

function CardGridTextLeft() {
  const excerptTextOne = "Want to";
  const excerptTextTwo = "Learn More About Oswald Chambers?";
  const excerptTextThree = "Explore the history behind the Scottish evangelist and his beloved devotional.";
  const btnLink = "/about/"

  return (
    <div className="content-center">
        <h2 className="text-primaryBrownColor-0 text-[39px] italic">{excerptTextOne}</h2>
        <h2 className="text-[39px] uppercase leading-[50px] text-textBlackGrayColor">{excerptTextTwo}</h2>
        <p className="font-normal text-lg leading-8 text-textBlackGrayColor-0 w-[90%] font-['Proxima_Nova'] mb-[20px] mt-[10px]">{excerptTextThree}</p>
        <Button className="solidBrownBg float-left" title="Learn More" btnLink="/about/"/>
    </div>
  )
}

export default CardGridTextLeft
