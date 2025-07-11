import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHooli, faLyft, faPiedPiperHat, faStripe, faAws, faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import {useLocation} from "react-router-dom";

export default function Clients() {
    
    const location = useLocation();

    const bgColor = location.pathname == "/" ? "bg-white" : "bg-[#FAFAFA]";
    
    return (
        <section className={`clients text-[#737373] flex flex-col md:flex-row items-center py-[3.125rem] md:px-[3.125rem] md:justify-center gap-[3.75rem] text-8xl ${bgColor}`}>
            <FontAwesomeIcon icon={faHooli}/>
            <FontAwesomeIcon icon={faLyft} />
            <FontAwesomeIcon icon={faPiedPiperHat} />
            <FontAwesomeIcon icon={faStripe} />
            <FontAwesomeIcon icon={faAws} />
            <FontAwesomeIcon icon={faRedditAlien} />
        </section>
    );
}