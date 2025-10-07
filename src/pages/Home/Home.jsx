import CarouselSlider from "../../components/Carousel/CarouselSlider"
import ElementsofStyle from "../../components/ElementsofStyle/ElementsofStyle"
import Features from "../../components/Features/Features"
import Lookbook from "../../components/Lookbook/Lookbook"
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts"


const Home = () => {
    
    return (
        <>
            <CarouselSlider/>
            <TrendingProducts/>
            <Lookbook/>
            <ElementsofStyle/>
            <Features/>
        </>
    )
}

export default Home