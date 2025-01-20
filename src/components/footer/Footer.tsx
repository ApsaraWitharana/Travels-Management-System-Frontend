import  'react';
import logo from '../../assets/images/logo.png';

const quick_links = [
    { path: '/home', display: 'Home' },
    { path: '/about', display: 'About' },
    { path: '/tours', display: 'Tours' },
];
const quick_links2 = [
    { path: '/gallery', display: 'Gallery' },
    { path: '/login', display: 'Login' },
    { path: '/register', display: 'Register' },
];

const Footer = () => {
    return (
        <div className= 'text-black'>
            <div className=" md:mx-10 footer-container">
                <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                    {/*left section */}
                    <div className='mt-0'>
                        <img className="mb-5 w-40" src={logo} alt=""/>
                        <p className="w-full md:w-2/3 text-gray-600 leading-6">
                            Embark on unforgettable journeys with us. Explore the world and create cherished memories
                            with our tailored travel experiences. Your adventure starts here!
                        </p>
                    </div>

                    {/*center section */}
                    <div>
                        <p className="text-xl font-medium mb-5">COMPANY</p>
                        <ul className="flex flex-col gap-2 text-gray-600">
                            {quick_links.map((link, index) => (
                                <li key={index} className="hover:text-gray-700 hover:cursor-pointer">
                                    {link.display}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/*right section */}
                    <div>
                        <p className="text-xl font-medium mb-5">Quick Links</p>
                        <ul className="flex flex-col gap-2 text-gray-600">
                            {quick_links2.map((link, index) => (
                                <li key={index} className="hover:text-gray-700 hover:cursor-pointer">
                                    {link.display}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-xl font-medium mb-5">Get In Touch</p>
                        <ul className="flex flex-col gap-2 text-gray-600">
                            <li className="hover:text-gray-700 hover:cursor-pointer">+94-71-3627-559</li>
                            <li className="hover:text-gray-700 hover:cursor-pointer">asachini095@gmail.com</li>
                        </ul>
                    </div>
                </div>
                {/*copyright text */}
                <div>
                    <hr className="h-1 bg-gray-300"/>
                    <p className="py-5 text-sm text-center">
                        Copyright © 2025 Travel - All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Footer