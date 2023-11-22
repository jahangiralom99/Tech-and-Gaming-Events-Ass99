import { useLoaderData } from "react-router-dom";
import Events from "../Events/Events";

const TechEvents = () => {

    const events = useLoaderData();
    return (
        <div className="mt-8">
            <h1 className="text-4xl font-bold">Tech Events Here</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-8">
            {
                events.map(event => <Events
                    key={event.id}
                    event={event}
                ></Events>)
            }
            </div>
        </div>
    );
};

export default TechEvents;