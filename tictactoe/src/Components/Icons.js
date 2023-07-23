
import {FaPen,FaTimes,FaRegCircle} from "react-icons/fa"

export default function Icons({value})
{
    // console.log(value)
    return (
        <>
            {value === "empty" ?( 
            <FaPen className="icon"/>
            ): value === "circle" ? (
            <FaRegCircle className="icon"/>
            ):( 
            <FaTimes className="icon"/>)}
              
            
        </>
    );
}