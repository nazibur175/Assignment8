import React, { useEffect, useState } from "react";
import './Home.css'
import SimpleCart from "../SimpleCart/SimpleCart";
import Time from "../Time/Time";
import Bookmarked from "../Bookmarked/Bookmarked";


const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [time, setTime] = useState([]);
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch('public/data.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    const handlerAddToBlog = (blog) => {
       
        const newTime = [...time, blog];
        setTime(newTime);
    }
    const handlerAddToBookMarked = (blog) =>{
        
     const newBook = [...book, blog];
        setBook(newBook);
    
    }
   
   
    return (
        <div className="home-container">
            <div className="blog-container ">
                {
                    blogs.map(blog => <SimpleCart
                        key={blog.id}
                        blog={blog}
                        handlerAddToBlog={handlerAddToBlog}
                        handlerAddToBookMarked ={handlerAddToBookMarked}

                    ></SimpleCart>)
                }

            </div>

            <div className="spendTime-container">
                <div className="spendTime-info card ">
                    <Time time={time}></Time>

                </div>
                <div className="spendTime-book card">
               
                   <Bookmarked book = {book}></Bookmarked>
                </div>


            </div>
        </div>

    );
};

export default Home;