import Header from "../components/HeaderBlock/Header"
import HeroPost from "../components/HeroPost";
import Resources from "../components/HomeResourceBlock/Resources";
import About from "../components/HomeAboutBlock/About";
import Button from "../components/Button";
import Footer from "../components/FooterBlock/Footer";

function Home() {
    return (
        <>
            <Header/>
            <HeroPost/>
            <Resources/>
            <About/>
            <Footer/>
        </>
    )
  }
  
  export default Home
  