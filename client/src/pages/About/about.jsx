// import React from "react";

// import { useProductContext } from "../../context/productContext";

const About = () => {

    // const {myname} = useProductContext();
    const data ={
        name: "ATIF KHAN",
    }
    return(
        <div>
            {/* {myname} */}
            <div>{data.name}</div>
        </div>
    )
}

export default About;
