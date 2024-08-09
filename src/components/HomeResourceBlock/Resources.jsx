import Container from "../Container"
import Button from "../Button"
import HeadlineText from "../HeadlineText"
import Grid from "../Grid"
import CardGridImageItems from "../CardGridImageItems"

function Resources() {

    return (
    <>
        <Container className="bg-cardBgColor-0 pt-24 resources" >
            <HeadlineText text="Now More Ways to Dig Into Oswald’s Timeless Devotions"/>    
            <Grid className="grid-cols-3 grid-rows-1 justify-items-center gap-y-[72px] mb-2">
                <CardGridImageItems/>
            </Grid>
            <Button className="transparentBg" title="All Resources" btnLink="/resources/"></Button>
        </Container>
    </>

    )
}

export default Resources
