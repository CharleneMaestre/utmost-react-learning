import { herosData } from "../data/HerosData"
import Button from "./Button"
import HeroTitle from "./HeroTitle"
import HeroExcerpt from "./HeroExcerpt"
import TextOverline from "./TextOverline"
import Grid from "./Grid"
import HeroImageUnderlay from "./HeroImageUnderlay"
import Mountain from "../images/mountain.svg"


function HeroPost() {
  const btnLink = "/modern-classic/prayer-in-the-fathers-hearing/"

  return (
    <div className="bg-primaryBrownColor-0 justify-items-center pt-24 h-auto [text-align-last:center] bg-[url(https://mlafz1pdm55u.i.optimole.com/cb:yN-G.4cac3/w:auto/h:auto/q:80/f:best/https://utmost.org/wp-content/uploads/noise-overlay-heavy.png)] bg-blend-overlay">
        <TextOverline text="Today's Devotional"/>
        { herosData.map(( data, index ) => {
          return (
            <div key={index}>
                <HeroTitle className="text-tertiaryGreenColor-0" title={data.title}/>
                <HeroExcerpt excerpt={data.excerpt}/>
            </div>
          )
        })}
        <Button className="btn-hero solidGreenBg" title="Reading Today's Devotional" btnLink=""></Button>
        <Grid className="grid-cols-2 grid-rows-1 gap-72">
            <HeroImageUnderlay src={Mountain} className="filter invert"/>
            <HeroImageUnderlay src={Mountain} className="filter invert h-64 float-right scale-x-[-1]"/>
        </Grid>
    </div>
  )
}

export default HeroPost
