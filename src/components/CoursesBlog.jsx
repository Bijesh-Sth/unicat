/* eslint-disable react/prop-types */
import { FaGraduationCap, FaStar } from "react-icons/fa";
const CoursesBlog = ({ image, title, name, description, price }) => {
    return (
        <>
            <div className="h-auto sm:w-full lg:w-80 xl:w-96 bg-white drop-shadow-xl rounded-md group">
                <img src={image} alt="" className="rounded-t-md w-full" />

                <div className=" flex flex-col gap-3  p-5">
                    <p className="card-text">{title}</p>
                    <p className="text-sm">{name}</p>
                    <p className="text-third-2">{description}</p>
                    <hr />
                    <div className="course-blog-flex justify-between">
                        <div className="course-blog-flex">
                            <div className="course-blog-flex">
                                <FaGraduationCap className="text-yellow" />
                                <p>20 Student</p>
                            </div>
                            <div className="course-blog-flex">
                                <FaStar className="text-yellow" />
                                <p>5 Rating</p>
                            </div>
                        </div>
                        <div className="font-bold text-primary text-xl">Rs. {price}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoursesBlog;
