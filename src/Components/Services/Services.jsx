import Service from "../service/Service";

const Services = ({servicesData}) => {
    return (
        <div>
            <h1 className="text-6xl font-bold text-center mb-10 font-dancing">Our Services</h1>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    servicesData.map(servicesCard => <Service key={servicesCard.id} servicesCard={servicesCard}></Service> )
                }
            </div>
        </div>
    );
};

export default Services;
