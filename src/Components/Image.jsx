import React from "react";

function Image(props){
    return(
        <div>
            <img src={props.url} alt="Nike Shoe" />
        </div>
    );
}    

export default Image