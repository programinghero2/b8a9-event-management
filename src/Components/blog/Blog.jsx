import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Blog = ({ blogInfo }) => {
    const { id, img, coupleName, place } = blogInfo
    return (
        <div data-aos="zoom-in" data-aos-duration="1000">
            <img className='lg:h-[400px] w-full ' src={img} alt="" />
            <hr className='mt-3 h-[2px] bg-gray-400 rounded' />
            <div className='text-center mt-3'>
                <p>{coupleName}</p>
                {/* blog details button */}
                <div className='flex justify-center '>
                    <Link to={`/blogsDetails/${id}`}
                        className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
                        href="#"
                    >
                        <button
                            className="flex px-2 select-none items-center gap-2 rounded-lg py-2 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </Link>
                </div>
                <p>{place}</p>
            </div>
        </div>
    );
};

export default Blog;