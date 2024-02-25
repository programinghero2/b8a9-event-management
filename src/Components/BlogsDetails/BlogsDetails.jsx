import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const BlogsDetails = () => {
    const blogs = useLoaderData()
    const {user} = useContext(AuthContext)
    const {Id} = useParams()
    const blogInfo = blogs?.find( blog => blog.id == Id);
    const {img,coupleName,place,description,date,memories} = blogInfo
    return (
        <div className="w-3/4 mx-auto mt-10 mb-20" >
            <div className="text-center mb-5 text-base font-bold">
                <p>{coupleName}</p>
                <p className="font-dancing text-xl">{place}</p>
            </div>
            <p className="text-end mb-3">{date}</p>
            <img className="mb-5 mx-auto"  src={img} alt="" />
            <p className="mb-5 text-gray-600">{description}</p>
            <p className="font-dancing text-center text-3xl mb-5">Memories</p>
            <div data-aos="zoom-in" data-aos-duration="1000" className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    memories?.map((imgLink,index) => <img key={index} src={imgLink} alt="" /> )
                }
            </div>
        </div>
    );
};

export default BlogsDetails;