import { Link } from "react-router-dom";

export const Home=()=>{
    return(
        <>
        <Link className="rounded btn btn-info text-white" to="/shop">Go to shop page</Link>
        </>
    );
}