import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ClientPackage = () => {
    const [lsData,setLsData] = useState([])
    useEffect(() => {
        const clientPackages = JSON.parse(localStorage.getItem('clientPackage'))
        setLsData(clientPackages)
    }, [])
    const deleteLsData = () => {
        localStorage.clear()
        setLsData([])
    }
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-11/12 mx-auto mt-10">
                {
                    lsData?.length > 0 ? lsData?.map(packageInfo =>
                        <div key={packageInfo.id} className="card card-compact bg-base-100 md:h-[180px] md:flex-row shadow-lg">
                            <div className="md:w-2/5">
                                <figure className="h-full"><img className="w-full h-full rounded-t-lg md:rounded-l-lg " src={packageInfo?.img} alt="Shoes" /></figure>
                            </div>
                            <div className="card-body md:w-3/5 ">
                                <h2 className="card-title">{packageInfo?.name}</h2>
                                <p>{packageInfo?.description.slice(0, 150)}...</p>
                                <div className="card-actions">
                                    <a
                                        className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
                                        href="#"
                                    >
                                        <Link to={`/serviceDetails/${packageInfo?.id}`}>
                                            <button
                                                className="flex px-0 select-none items-center gap-2 rounded-lg py-2 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) :
                        ""
                }
            </div>
            <div className="flex justify-center">
                {
                    lsData?.length > 0 && <button onClick={deleteLsData} className="mt-10 btn-sm bg-pink-500 text-white rounded-lg">Delete package</button>
                }
            </div>
        </div>
    );
};

export default ClientPackage;


