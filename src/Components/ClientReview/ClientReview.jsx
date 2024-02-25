import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./ClientReview.css"
import { useEffect, useState } from 'react';
const ClientReview = () => {
    const [clientsInfo, setClientsInfo] = useState([])
    useEffect(() => {
        fetch("ClientReview.json")
            .then(res => res.json())
            .then(data => setClientsInfo(data))
    }, [])
    return (
        <div className=' flex flex-col-reverse md:flex-row md:gap-5 '>
            <div className="md:flex-1">
                <Swiper

                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="w-[60vw] md:w-[35vw] "
                >
                    {
                        clientsInfo.map(clientInfo =>
                            <SwiperSlide key={clientInfo?.id} className={`slider${clientInfo?.id} client-slider`}>
                                <div>
                                    <img className='w-20 h-20 rounded-full mx-auto' src={clientInfo?.img} alt="" />
                                    <p className='mt-2 text-center'>{clientInfo?.Clientname}</p>
                                    <p className='text-[13px] md:text-[15px]  text-justify text-[#dbcccc] p-3'>{clientInfo?.review}</p>
                                </div>
                            </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <div  data-aos="fade-left"  data-aos-duration="1000" className=' p-2 md:flex-1'>
                <h1 className="text-6xl md:text-5xl lg:text-6xl md:flex-1 font-bold font-dancing text-center mb-5 md:mt-5 ">Client Review</h1>
                <p className='text-gray-500 mb-5'>In this section we have given some client reviews of our previous events. We try to provide the best service to our clients....</p>
            </div>

        </div>
    );
};

export default ClientReview;