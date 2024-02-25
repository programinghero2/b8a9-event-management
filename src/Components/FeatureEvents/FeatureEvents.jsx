import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import "./FeatureEvents.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const FeatureEvents = () => {
    const [features, setFeatures] = useState([])
    useEffect(() => {
        fetch("feauturs.json")
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <div className='lg:flex'>
            <div  data-aos="fade-right"  data-aos-duration="1000" className='lg:flex-1 mt-10'>
                <h1 className='text-6xl font-bold text-center font-dancing'>Upcoming Events</h1>
                <p className='p-5 text-gray-500'>
                    Join us for a day full of love and celebration like tying the knot! Our upcoming wedding promises to be a magical affair, where two hearts become one. Get ready to witness the union of two souls in a beautiful ceremony surrounded by family and friends.we unveil our latest collection of wedding services and products designed to make your special day truly unforgettable......</p>
            </div>
            {/* <div data-aos="fade-right">
                
            </div> */}
            <Swiper className='lg:flex-1'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                navigation
                slidesPerView={3}
            >
                {
                    features.map(feature => <SwiperSlide key={feature.id}>
                        <img className='h-[165px] md:h-[250px] lg:w-[210px] lg:h-[270px] shadow-xl rounded-lg' src={feature?.img} alt="" />
                        <p className='text-[12px] md:text-lg font-bold mt-3'>{feature?.Couplename}</p>
                        <p className='text-[13px] md:text-base'>{feature?.place}</p>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default FeatureEvents;