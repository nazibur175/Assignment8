import React from "react";
import './Time.css';
const Time = (props) => {
    const {time} =props;
    // console.log(time);
let total =0;
for (const blogs of time){
    total = total + blogs.time;
}

    return(
        <div>
<h6>Spent time on read :  {total} min</h6>
        </div>
    );
};

export default Time;