import CardGridImageRight from "../CardGridImageRight"
import CardGridTextLeft from "../CardGridTextLeft"
import Grid from "../Grid"
import Container from "../Container"

function About() {
  const imageSource = "https://mlafz1pdm55u.i.optimole.com/cb:yN-G.4cac3/w:612/h:612/q:80/dpr:2.0/f:best/https://utmost.org/wp-content/uploads/oswald-chambers-about.jpg"

  return (
    <Container className="bg-cardBgColor-0 pt-24 pb-24">
      <Grid className="grid-cols-2 grid-rows-1 gap-4 mt-20">
          <CardGridTextLeft/>
          <CardGridImageRight  imageSource={imageSource}/>
      </Grid>
    </Container>
  )
}

export default About
