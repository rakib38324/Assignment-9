import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Body = ({topic}) => {
    const {name,logo,total} = topic;
    
    return (
        <div>
            <div className='m-auto sm:w-1/2 h-1/2 p-4  rounded-lg  bg-lime-100 mb-5 mt-5 lg:flex justify-between items-center'>
                <img className='bg-indigo-100 rounded-md' src={logo} alt="" />
                <div className='lg:text-3xl lg:pr-32'>
                <h1 className="pb-5 text-4xl  text-indigo-900 font-extrabold">{name}</h1>
                <p className="pb-5">Total Quiz number: {total}</p>
                <button className="bg-cyan-500 hover:bg-cyan-900 p-4 rounded-lg">
                    Start Practice
                    <FontAwesomeIcon className="pl-4" icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
           
        </div>
    );
};

export default Body;