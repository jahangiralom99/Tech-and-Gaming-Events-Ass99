import { useParams } from "react-router-dom";

const EventDetails = () => {

    const { id } = useParams();

    console.log(id);

    return (
        <div>
            
        </div>
    );
};

export default EventDetails;