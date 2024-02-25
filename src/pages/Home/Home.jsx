import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/banner/Banner";
import Services from "../../Components/Services/Services";
import FeatureEvents from "../../Components/FeatureEvents/FeatureEvents";
import ClientReview from "../../Components/ClientReview/ClientReview";
import Footer from "../../Components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
    const servicesData = useLoaderData()
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <div className="mt-2">
                    <Banner></Banner>
                </div>
                <div className="mt-10">
                    <Services servicesData={servicesData}></Services>
                </div>
                <div className="mt-5 md:mt-20">
                    <FeatureEvents></FeatureEvents>
                </div>
                <div className="mt-5 md:mt-20">
                    <ClientReview></ClientReview>
                </div>
            </div>
            <div className="mt-10 lg:mt-16">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;