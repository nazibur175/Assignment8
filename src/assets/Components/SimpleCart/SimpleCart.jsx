import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SimpleCart.css';
const SimpleCart = (props) => {
    
    const { title, url, name, img, time } = props.blog;
    const handlerAddToBlog = props.handlerAddToBlog;
    const handlerAddToBookMarked = props.handlerAddToBookMarked;
    
    return (
        <div className="blog-container">
            <div className="blog-card ">
            
                <div className="blog">
                    <img className="w-100 " src={url} alt="" />
                </div>
                <div className="author-container">
                    <div className="author-info">
                        <img className="author-img rounded-5" src={img} alt="" />
                       <div>
                       <h6 className="author-name px-3 pt-3">{name}</h6>
                        <p className="px-3">Mar 14 (4 Days ago) </p>
                       </div>
                    </div>
                    <div>
                        <p onClick={() => handlerAddToBookMarked(props.blog)} className="py-2 ">{time} min read <FontAwesomeIcon icon={faBookmark} /></p>
                    </div>
                    

                </div>
                <div className="title-info py-3">
                    <h5>{title}</h5>
                    <p>#beginners #programming</p>
                </div>
                <div>
              

                

                <h6 onClick={()=>handlerAddToBlog(props.blog)} className="mark-as-read"> <u>Mark as read</u></h6>
                
             
                </div>
                
            </div>
            <hr></hr>
        </div>
    );
};

export default SimpleCart;