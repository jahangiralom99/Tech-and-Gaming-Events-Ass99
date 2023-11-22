import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";

const AllService = () => {
    const allService = useLoaderData();

    return (
        <div className="mt-12 px-4">
            <h1 className="text-4xl font-bold ">Our Service </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
            {
                allService?.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default AllService;
