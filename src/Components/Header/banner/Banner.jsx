import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
AOS.init();
import bannerBg from "../../../assets/banner1.jpg"
import bannerLogo from "../../../assets/bannerLogo.webp"
const Banner = () => {
    return (
        <div className="hero h-[80vh] rounded-b-lg" style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="hero-overlay bg-opacity-60 rounded-b-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <div className="max-w-md">
                        <img className="w-16 mx-auto" src={bannerLogo} alt="" />
                        <h1 className="mb-2 text-5xl font-bold font-dancing">Wedding and <br /> Event Planning</h1>
                        <p className="mb-5 font-dancing">
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Bangladesh | Dhaka',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Bangladesh | Chattogram',
                                    1000,
                                    'Bangladesh | Khulna',
                                    1000,
                                    'Bangladesh | Rajshahi ',
                                    1000,
                                    'Bangladesh | Barishal  ',
                                    1000,
                                    'Bangladesh | Sylhet   ',
                                    1000,
                                    'Bangladesh | Rangpur',
                                    1000,
                                    'Bangladesh | Mymensingh ',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '1.5em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;