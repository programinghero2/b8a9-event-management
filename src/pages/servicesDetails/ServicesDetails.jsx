import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServicesDetails = () => {
    const serviceDetailsData = useLoaderData()
    const { Id } = useParams()
    const details = serviceDetailsData.find(item => item.id == Id)
    const { id, name, img, price, description } = details
    const handleLocalStorage = () => {
        let clientPackage = []
        const getLsData = JSON.parse(localStorage.getItem("clientPackage"))
        if (!getLsData) {
            clientPackage.push(details)
            localStorage.setItem("clientPackage", JSON.stringify(clientPackage))
            toast("successfully get package!")
        }
        else {
            const isExist = getLsData.find(item => item.id == details.id)
            if (!isExist) {
                clientPackage = [...getLsData, details]
                localStorage.setItem("clientPackage", JSON.stringify(clientPackage))
                toast("successfully get package!")
            }
            else {
                toast("package alreay purchage")
            }
        }
    }
    return (
        <div className='w-11/12 mx-auto mt-2 md:mt-5 mb-10'>
            <img className='w-full' src={img} alt="" />
            <p className='text-3xl font-bold mt-2 md:mt-5'>{name}</p>
            <p className='text-gray-600 text-[13px] md:text-base  mt-3'>{description}</p>
            <div className='text-center mt-8'>
                <button onClick={handleLocalStorage} className="btn btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    Get Package ${price}
                </button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default ServicesDetails;