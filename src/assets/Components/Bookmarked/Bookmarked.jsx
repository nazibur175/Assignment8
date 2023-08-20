import React from "react";
import './Bookmarked.css';
const Bookmarked = (props) => {
    const {book} =props;
    return(
        <div>
  <h6>Bookmarked Blogs :{book.length} </h6>
        </div>
    );
};

export default Bookmarked;