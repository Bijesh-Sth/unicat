import { Link } from "react-router-dom";
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div
                className="bg-secondary bg-fixed"
                style={{
                    backgroundImage: `url('/assets/images/footer_background.png')`,
                }}
            >
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 py-14 lg:py-16">
                    {/* logo */}
                    <div className="flex flex-col gap-6 text-white ">
                        <div className="logo flex items-center">
                            <Link to={"/"}>
                                <p className="text-white text-4xl font-bold">
                                    Unic<span className="text-primary">at</span>
                                </p>
                            </Link>
                        </div>
                        <p className="text-third text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="flex gap-3 items-center">
                            <div className="bg-third-2 w-9 h-9 rounded-full flex items-center justify-center">
                                <FaFacebookF className="" />
                            </div>
                            <div className="bg-third-2 w-9 h-9 rounded-full flex items-center justify-center">
                                <FaGooglePlusG className=" text-2xl" />
                            </div>
                            <div className="bg-third-2 w-9 h-9 rounded-full flex items-center justify-center">
                                <FaInstagram className=" text-xl" />
                            </div>
                            <div className="bg-third-2 w-9 h-9 rounded-full flex items-center justify-center">
                                <FaTwitter className=" text-xl" />
                            </div>
                        </div>
                    </div>
                    {/* contact info */}
                    <div className="flex flex-col gap-6 text-third">
                        <p className="text-lg font-bold text-white">Contact Us</p>
                        <p className="text-sm">Email: info@deercreative@gmail.com</p>
                        <p className="text-sm">Phone: +(977) 111 555 666</p>
                        <p className="text-sm">Kathmandu, Nepal</p>
                    </div>
                    {/* pages */}
                    <div className="flex flex-col gap-6 text-third px-0 lg:px-10">
                        <p className="text-lg font-bold text-white">Contact US</p>
                        <div className="grid grid-cols-2 justify-between">
                            <ul className="leading-8">
                                <li>
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/about"}>About</Link>
                                </li>
                                <li>
                                    <Link to={"/contact"}>Contact</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Features</Link>
                                </li>
                            </ul>
                            <ul className="leading-8">
                                <li>
                                    <Link to={"/courses"}>Courses</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Events</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Gallery</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>FAQs</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* mobile */}
                    <div className="flex flex-col gap-6 ">
                        <p className="text-lg font-bold text-white">Mobile</p>
                        <img src="/assets/images/mobile_1.png" alt="" className="w-40" />
                        <img src="/assets/images/mobile_2.png" alt="" className="w-40" />
                    </div>
                </div>
                <div className="container text-third">
                    <hr />
                    <div className="flex justify-between items-center text-sm font-light py-3">
                        <p>Copyright &copy;2024 All Rights Reserved. Amnil Technologies Pvt. Ltd.</p>
                        <div className="flex gap-10">
                            <p>Copyright Notification</p>
                            <p>Terms of Use</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
