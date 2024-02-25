import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Service = ({ servicesCard }) => {
    const {id,img,name,price,description} = servicesCard
    return (
        <div>
            <div data-aos="zoom-in-up"  data-aos-duration="1000" className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-[250px] w-full rounded-lg' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>price:${price}</p>
                    <p>{description.slice(0,100)}...</p>
                    <div className="card-actions mt-3">
                        <Link to={`/serviceDetails/${id}`}>
                            <button className='btn btn-primary'>Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;