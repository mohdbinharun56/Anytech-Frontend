import { useState } from 'react';
import '../Header.css';
import { RiArrowDropDownLine, RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='nav mb-10 bg-[#1F80F0] lg:bg-transparent py-7 px-20'>
            <nav className='lg:flex  justify-between items-center pt-0'>
                <div className='flex justify-between'>
                    <div>
                        <img src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format" alt="AnyTechLogo" />
                    </div>

                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
                            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                        </button>
                    </div>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <ul className='flex flex-col lg:flex-row gap-8 text-white'>
                        <li
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOpen(!isOpen)
                        }}
                        >
                            <a href="">
                                <div className='flex items-center relative'>
                                    <span>Solutions</span>
                                    <span><RiArrowDropDownLine className='text-base' /></span>
                                </div>
                                {/* <div className={`${isOpen ? 'hidden' :'block p-0 absolute bg-white px-5 py-2 rounded-md'} lg:${isOpen ? 'block p-0 absolute bg-white px-5 py-2 rounded-md' : 'hidden'}`}> */}
                                <div className={`lg:${isOpen ? 'block p-0 absolute bg-white px-5 py-2 rounded-md' : 'hidden'}`}>
                                    <li className='text-[#333] hover:text-[#007bff] mb-1'>AnyCaaS</li>
                                    <hr/>
                                    <li className='text-[#333] hover:text-[#007bff] mb-1'>AnyBaaS</li>
                                    <hr/>
                                    <li className='text-[#333] hover:text-[#007bff] mb-1'>AnyPaaS</li>
                                </div>

                            </a>
                            </li>
                        <li><a href="">Services</a></li>
                        <li><a href="">About Us</a></li>
                    </ul>

                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <button className="btn btn-outline border border-[#F5DEB3] hover:bg-white outline-none text-lg text-white hover:text-[#0056b3]">Contact Us > </button>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;